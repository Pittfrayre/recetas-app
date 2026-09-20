#!/usr/bin/env python3
"""
Actualiza precios.json con datos públicos de PROFECO
(Quién es Quién en los Precios), leyendo la lista maestra ingredientes.json.

    python scripts/actualizar_precios.py [--dry-run]

No requiere llaves: el catálogo de PROFECO es público.
Corre solo cada semana con .github/workflows/actualizar-precios.yml

Un ingrediente sin entrada en ingredientes.json simplemente no existe para este
script. Por eso el alta en la lista maestra va SIEMPRE antes que la actualización
de precios: ese es el orden que evita recetas con precio fantasma.
"""

import argparse
import json
import re
import statistics
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent / "datos"
API = "https://qqp.profeco.gob.mx/api/precios"
UA = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/122 Safari/537.36",
    "Accept": "application/json",
}
CIUDAD = "0802"            # Ciudad Juárez
CIUDAD_NOMBRE = "Ciudad Juárez"
SALTO_SOSPECHOSO = 0.60    # 60% de un jalón: mejor revisarlo a mano


def consultar(termino):
    url = f"{API}?clave_ciudad={CIUDAD}&busqueda={urllib.parse.quote(termino)}"
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=45) as r:
        return json.loads(r.read()).get("data", {}).get("productos", [])


# "PECHUGA, S/M, 1 KG." -> (1000, 'g')      "BOLSA 15 PZAS" -> (15, 'pz')
EQUIV = {
    "KG": ("g", 1000), "KGS": ("g", 1000), "KILO": ("g", 1000),
    "GR": ("g", 1), "GRS": ("g", 1), "G": ("g", 1),
    "LT": ("ml", 1000), "LTS": ("ml", 1000), "L": ("ml", 1000), "ML": ("ml", 1),
    "PZAS": ("pz", 1), "PZS": ("pz", 1), "PZA": ("pz", 1),
    "PIEZAS": ("pz", 1), "PIEZA": ("pz", 1),
}
RE_TAM = re.compile(r"(\d+(?:[.,]\d+)?)\s*(KGS?|KILO|GRS?|G|LTS?|L|ML|PZAS?|PZS|PIEZAS?)\b")


def tamano(producto):
    s = producto.upper().replace(" ", " ")
    m = RE_TAM.search(s)
    if m:
        n = float(m.group(1).replace(",", "."))
        base, factor = EQUIV[m.group(2)]
        if n > 0:
            return n * factor, base
    # "PAQUETE CON 30" = 30 piezas. Acotado a estas palabras a propósito:
    # un "CON 30% DE SOYA" de una lata de atún no debe contarse como 30 piezas.
    m = re.search(r"(?:PAQUETE|CAJA|CART[OÓ]N|BLISTER|CONO)\s+CON\s+(\d+)", s)
    if m:
        return float(m.group(1)), "pz"

    for palabra in ("MANOJO", "PZA.", "PIEZA", "MANOJITO", "ATADO"):
        if palabra in s:
            return 1.0, "pz"
    return None


def a_unidad_receta(precio, cant_base, unidad_base, unidad_destino, g_por_pieza):
    por_base = precio / cant_base
    if unidad_base == unidad_destino:
        return por_base
    if unidad_base in ("g", "ml") and unidad_destino == "pz":
        return por_base * g_por_pieza if g_por_pieza else None
    if unidad_base == "pz" and unidad_destino in ("g", "ml"):
        return por_base / g_por_pieza if g_por_pieza else None
    return None


def resolver(nombre, cfg):
    prof = cfg.get("profeco")
    if not prof:
        return None, "sin fuente pública (precio manual)"

    try:
        crudos = consultar(prof["busqueda"])
    except Exception as e:
        return None, f"error de red: {type(e).__name__}"
    if not crudos:
        return None, "sin observaciones"

    obs = [p for p in crudos if p.get("tipo_producto") == prof["tipo"]]
    if not obs:
        return None, f'ningún producto del tipo "{prof["tipo"]}"'

    if prof.get("contiene"):
        filtrados = [p for p in obs if prof["contiene"].upper() in p["producto"].upper()]
        if filtrados:
            obs = filtrados

    puntos = []
    for p in obs:
        t = tamano(p["producto"])
        if not t:
            continue
        u = a_unidad_receta(p["precio"], t[0], t[1], cfg["unidad"], prof.get("g_por_pieza"))
        if u and u > 0:
            puntos.append((u, p))
    if not puntos:
        return None, "no se pudo leer el tamaño del empaque"

    valores = sorted(x[0] for x in puntos)
    barato = min(puntos, key=lambda x: x[0])
    return {
        "precio_unidad": round(statistics.median(valores), 6),
        "unidad": cfg["unidad"],
        "observaciones": len(puntos),
        "cadenas": sorted({p["cadena_comercial"] for _, p in puntos}),
        "mas_barato": {
            "cadena": barato[1]["cadena_comercial"],
            "precio_unidad": round(barato[0], 6),
            "producto": barato[1]["producto"],
        },
        "rango": [round(valores[0], 6), round(valores[-1], 6)],
        "fecha_observacion": max(p.get("fecha_observacion", "") for _, p in puntos),
    }, None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true", help="no escribe precios.json")
    args = ap.parse_args()

    catalogo = json.loads((RAIZ / "ingredientes.json").read_text(encoding="utf-8"))["ingredientes"]

    ruta = RAIZ / "precios.json"
    previo = {}
    if ruta.exists():
        previo = json.loads(ruta.read_text(encoding="utf-8")).get("precios", {})

    precios, sin_fuente, fallos, alertas = {}, [], {}, []

    for nombre, cfg in catalogo.items():
        dato, error = resolver(nombre, cfg)

        if error == "sin fuente pública (precio manual)":
            sin_fuente.append(nombre)
            print(f"  --  {nombre:28} manual · {cfg.get('nota','')}")
            continue

        if error:
            fallos[nombre] = error
            if nombre in previo:                 # conservamos el último bueno
                precios[nombre] = previo[nombre]
            print(f"  !!  {nombre:28} {error}")
            continue

        antes = previo.get(nombre, {}).get("precio_unidad")
        if antes:
            salto = abs(dato["precio_unidad"] - antes) / antes
            if salto > SALTO_SOSPECHOSO:
                alertas.append(f"{nombre}: {antes:.4f} -> {dato['precio_unidad']:.4f} "
                               f"({salto*100:.0f}%)")

        precios[nombre] = dato
        ref = dato["precio_unidad"] * (1 if cfg["unidad"] == "pz" else 100)
        etq = "pieza" if cfg["unidad"] == "pz" else f'100 {cfg["unidad"]}'
        print(f"  ok  {nombre:28} ${ref:7.2f} / {etq:7}"
              f"  {dato['observaciones']:2} obs, {len(dato['cadenas'])} cadenas"
              f"   más barato: {dato['mas_barato']['cadena']}")

    salida = {
        "fuente": "PROFECO — Quién es Quién en los Precios",
        "fuente_url": "https://qqp.profeco.gob.mx/",
        "ciudad": CIUDAD_NOMBRE,
        "estrategia": "mediana entre cadenas",
        "actualizado": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "sin_fuente": sin_fuente,
        "fallos": fallos,
        "alertas": alertas,
        "precios": precios,
    }

    print(f"\n{len(catalogo)} ingredientes en la lista maestra")
    print(f"  {len(precios)} con precio de PROFECO")
    print(f"  {len(sin_fuente)} manuales a propósito")
    print(f"  {len(fallos)} fallaron")
    for a in alertas:
        print(f"  !! salto grande -> {a}")

    if args.dry_run:
        print("\n(dry-run: no se escribió precios.json)")
        return 1 if fallos else 0

    ruta.write_text(json.dumps(salida, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"\nEscrito {ruta}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
