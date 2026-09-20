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
        if e.get("unidad") == "pz" and not prof.get("g_por_pieza"):
            problemas.append("unidad en piezas y sin g_por_pieza: si la tienda vende "
                             "por kilo, el precio saldría nulo")
    return problemas


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("receta", help="JSON con la receta nueva")
    ap.add_argument("--revisar", action="store_true", help="solo diagnostica, no escribe")
    args = ap.parse_args()

    nueva = json.loads(Path(args.receta).read_text(encoding="utf-8"))
    catalogo = cargar("ingredientes.json")
    recetas = cargar("recetas.json")

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

    print(f"{len(usados)} ingredientes en la receta")
    print(f"  ya en la lista maestra : {len(usados) - len(faltantes)}")
    print(f"  nuevos                 : {len(faltantes)}")

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

    if errores:
        print("\nNo se dio de alta nada. Corrige esto primero:\n")
        for e in errores:
            print(f"  ERROR  {e}")
        return 1

    if args.revisar:
        print("\nTodo en orden. Corre sin --revisar para dar de alta.")
        return 0

    # --- paso 3: alta en la lista maestra ---
    for n in faltantes:
        catalogo["ingredientes"][n] = declarados[n]
    catalogo["ingredientes"] = dict(sorted(catalogo["ingredientes"].items()))
    guardar("ingredientes.json", catalogo)
    if faltantes:
        print(f"\nAgregados a la lista maestra: {', '.join(faltantes)}")

    # --- la receta, ya sin datos duplicados ---
    nueva.pop("ingredientes_nuevos", None)
    nueva["ingredientes"] = [{"n": i["n"], "c": i["c"]} for i in nueva["ingredientes"]]
    recetas["recetas"].append(nueva)
    guardar("recetas.json", recetas)
    print(f'Receta "{nueva["nombre"]}" agregada ({len(recetas["recetas"])} en total)')

    # --- paso 4: ahora sí, precios ---
    print("\nActualizando precios…\n")
    return subprocess.call([sys.executable, str(Path(__file__).resolve().parent / "actualizar_precios.py")])


if __name__ == "__main__":
    sys.exit(main())
