#!/usr/bin/env python3
"""
Da de alta una receta nueva en el orden correcto:

  1. lee la receta
  2. compara sus ingredientes contra la lista maestra
  3. da de alta los que falten (con su unidad, pasillo y fuente de precio)
  4. hasta entonces, actualiza los precios

Ese orden importa: si un ingrediente entra sin pasar por la lista maestra, el
robot de precios nunca lo va a ver y esa receta se queda con precio fantasma.

    python scripts/agregar_receta.py receta-nueva.json
    python scripts/agregar_receta.py receta-nueva.json --revisar   # solo diagnostica

El archivo de entrada es la receta sola, con sus ingredientes como
{"n": nombre, "c": cantidad} más, para los ingredientes nuevos, un bloque
"ingredientes_nuevos" que los describa:

{
  "id": "ensalada-lenteja",
  "nombre": "Ensalada tibia de lenteja",
  ...
  "ingredientes": [{"n": "Lenteja", "c": 300}, {"n": "Limón", "c": 2}],
  "ingredientes_nuevos": {
    "Lenteja": {
      "unidad": "g", "pasillo": "Abarrotes", "precio_referencia": 0.08,
      "profeco": {"busqueda": "lenteja", "tipo": "LENTEJA"}
    }
  }
}
"""

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent / "datos"
PASILLOS = {"Carnes y pescado", "Frutas y verduras", "Lácteos",
            "Abarrotes", "Panadería", "Especias"}
UNIDADES = {"g", "ml", "pz"}
EXCLUIDOS = ["apio", "aceituna", "mango", "champiñon", "champiñón", "calabacita"]


def cargar(nombre):
    return json.loads((RAIZ / nombre).read_text(encoding="utf-8"))


def guardar(nombre, datos):
    (RAIZ / nombre).write_text(
        json.dumps(datos, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")


def validar_entrada_catalogo(nombre, e):
    problemas = []
    if e.get("unidad") not in UNIDADES:
        problemas.append(f'unidad "{e.get("unidad")}" inválida (usa g, ml o pz)')
    if e.get("pasillo") not in PASILLOS:
        problemas.append(f'pasillo "{e.get("pasillo")}" inválido; los válidos son {sorted(PASILLOS)}')
    if not e.get("precio_referencia"):
        problemas.append("falta precio_referencia (precio por unidad, el respaldo "
                         "cuando PROFECO no responde)")
    prof = e.get("profeco")
    if prof is None and not e.get("nota"):
        problemas.append('sin fuente PROFECO y sin "nota" que explique por qué es manual')
    if prof:
        if not prof.get("busqueda") or not prof.get("tipo"):
            problemas.append('el bloque profeco necesita "busqueda" y "tipo"')
        # Si contamos piezas y la tienda vende por peso, hace falta la conversión.
        # Hay excepciones reales —el huevo se publica por paquete de N piezas—, y
        # para esas se declara unidad_tienda: "pz" en vez de inventar un g_por_pieza.
        if (e.get("unidad") == "pz" and not prof.get("g_por_pieza")
                and prof.get("unidad_tienda") != "pz"):
            problemas.append('unidad en piezas y sin g_por_pieza: si la tienda vende '
                             'por kilo, el precio saldría nulo. Si la tienda ya lo '
                             'vende por pieza, declara "unidad_tienda": "pz".')
    return problemas


def revisar(nueva, catalogo, recetas):
    """Devuelve (errores, faltantes). No escribe nada."""
    errores = []

    # --- la receta en sí ---
    if not re.fullmatch(r"[a-z0-9-]+", nueva.get("id", "")):
        errores.append(f'id "{nueva.get("id")}": minúsculas, sin acentos, con guiones')
    if any(r["id"] == nueva.get("id") for r in recetas["recetas"]):
        errores.append(f'ya existe una receta con el id "{nueva["id"]}"')

    # --- paso 2: comparar contra la lista maestra ---
    usados = [i["n"] for i in nueva.get("ingredientes", [])]
    conocidos = set(catalogo["ingredientes"])
    faltantes = [n for n in usados if n not in conocidos]
    declarados = nueva.get("ingredientes_nuevos", {})

    # Nombres casi iguales: casi siempre es un typo, no un ingrediente nuevo
    for n in faltantes:
        parecidos = [c for c in conocidos if c.lower().strip() == n.lower().strip()]
        if parecidos:
            errores.append(f'"{n}" parece ser "{parecidos[0]}" escrito distinto. '
                           f"Usa el nombre exacto o la app no los va a consolidar.")

    for n in faltantes:
        if n in errores:
            continue
        if n not in declarados:
            errores.append(f'"{n}" es nuevo y no viene descrito en "ingredientes_nuevos". '
                           f"Sin eso no se le puede asignar precio.")
        else:
            for p in validar_entrada_catalogo(n, declarados[n]):
                errores.append(f'"{n}": {p}')

    for n in usados:
        for x in EXCLUIDOS:
            if x in n.lower():
                errores.append(f'"{n}" está en la lista de ingredientes excluidos')

    return errores, faltantes


def dar_de_alta(nueva, faltantes, catalogo, recetas):
    """Paso 3: el ingrediente entra a la maestra ANTES que la receta."""
    declarados = nueva.get("ingredientes_nuevos", {})
    for n in faltantes:
        catalogo["ingredientes"][n] = declarados[n]
    catalogo["ingredientes"] = dict(sorted(catalogo["ingredientes"].items()))
    guardar("ingredientes.json", catalogo)

    nueva.pop("ingredientes_nuevos", None)
    nueva["ingredientes"] = [{"n": i["n"], "c": i["c"]} for i in nueva["ingredientes"]]
    recetas["recetas"].append(nueva)
    guardar("recetas.json", recetas)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("receta", help='JSON con una receta, o con {"recetas":[...]} para un lote')
    ap.add_argument("--revisar", action="store_true", help="solo diagnostica, no escribe")
    ap.add_argument("--no-precios", action="store_true",
                    help="no actualizar precios al final (útil al cargar un lote)")
    args = ap.parse_args()

    entrada = json.loads(Path(args.receta).read_text(encoding="utf-8"))
    lote = entrada["recetas"] if isinstance(entrada, dict) and "recetas" in entrada else [entrada]

    catalogo = cargar("ingredientes.json")
    recetas = cargar("recetas.json")

    # Se revisa el lote completo antes de escribir nada: o entran todas o ninguna.
    # Durante la revisión el catálogo y la lista crecen en memoria, para cachar
    # también los choques entre recetas del mismo lote.
    planes, fallaron = [], False
    for nueva in lote:
        errores, faltantes = revisar(nueva, catalogo, recetas)
        etiqueta = nueva.get("nombre", nueva.get("id", "?"))
        if errores:
            fallaron = True
            print(f"  FALLA  {etiqueta}")
            for e in errores:
                print(f"         {e}")
            continue
        print(f"  ok     {etiqueta}  ({len(faltantes)} ingredientes nuevos)")
        planes.append((nueva, faltantes))
        for n in faltantes:
            catalogo["ingredientes"].setdefault(n, nueva["ingredientes_nuevos"][n])
        recetas["recetas"].append({"id": nueva["id"], "_simulado": True})

    # se deshace la simulación antes de escribir de verdad
    catalogo = cargar("ingredientes.json")
    recetas = cargar("recetas.json")

    if fallaron:
        print("\nNo se dio de alta nada. Corrige lo de arriba primero.")
        return 1
    if args.revisar:
        print(f"\nLas {len(planes)} pasan. Corre sin --revisar para darlas de alta.")
        return 0

    print()
    for nueva, faltantes in planes:
        dar_de_alta(nueva, faltantes, catalogo, recetas)
        print(f'  agregada  {nueva["nombre"]}')
    print(f'\n{len(recetas["recetas"])} recetas en total, '
          f'{len(catalogo["ingredientes"])} ingredientes en la maestra')

    if args.no_precios:
        print("\n(--no-precios: falta correr actualizar_precios.py)")
        return 0

    print("\nActualizando precios…\n")
    return subprocess.call([sys.executable,
                            str(Path(__file__).resolve().parent / "actualizar_precios.py")])


if __name__ == "__main__":
    sys.exit(main())
