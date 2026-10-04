#!/usr/bin/env python3
"""
Precios de MAYOREO del Mercado de Abasto de Cd. Juárez, desde el SNIIM
(Sistema Nacional de Información e Integración de Mercados, Secretaría de Economía).

    python sniim.py --listar          # qué productos hay y a cómo están
    python sniim.py "Jitomate Saladette" "Cebolla Blanca"

Esto NO reemplaza a PROFECO. PROFECO da precio de tienda, que es lo que Pedro
realmente paga; SNIIM da precio de central de abasto. Sirve como contraste: el
menudeo nunca puede estar por debajo del mayoreo, y cuando eso pasa es señal de
que el dato de tienda está mal clasificado.
"""

import argparse
import html
import json
import re
import ssl
import sys
import urllib.parse
import urllib.request
from datetime import date, timedelta

URL = ("http://www.economia-sniim.gob.mx/nuevo/consultas/mercadosnacionales/"
       "preciosdemercado/agricolas/consultafrutasyhortalizas.aspx")
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/122 Safari/537.36"
JUAREZ = "63"          # Chihuahua: Mercado de Abasto de Cd. Juárez
CHIHUAHUA = "61"       # Chihuahua: Central de Abasto de Chihuahua
POR_KILO = "2"         # ddlPrecios: precio calculado por kilogramo

_ctx = ssl.create_default_context()
_ctx.check_hostname = False
_ctx.verify_mode = ssl.CERT_NONE


def _campo(pagina, nombre):
    m = re.search(rf'id="{nombre}"[^>]*value="([^"]*)"', pagina)
    return html.unescape(m.group(1)) if m else ""


def consultar(destino=JUAREZ, dias=10):
    """Devuelve la lista de observaciones crudas del periodo."""
    req = urllib.request.Request(URL, headers={"User-Agent": UA})
    pagina = urllib.request.urlopen(req, timeout=45, context=_ctx).read().decode("utf-8", "ignore")

    hasta = date.today()
    desde = hasta - timedelta(days=dias)
    datos = {
        "__EVENTTARGET": "", "__EVENTARGUMENT": "", "__LASTFOCUS": "",
        "__VIEWSTATE": _campo(pagina, "__VIEWSTATE"),
        "__VIEWSTATEGENERATOR": _campo(pagina, "__VIEWSTATEGENERATOR"),
        "__EVENTVALIDATION": _campo(pagina, "__EVENTVALIDATION"),
        "ddlProducto": "-1", "ddlOrigen": "-1", "ddlDestino": destino,
        "txtFechaInicio": desde.strftime("%d/%m/%Y"),
        "txtFechaFinal": hasta.strftime("%d/%m/%Y"),
        "ddlPrecios": POR_KILO,
        "btnBuscar.x": "10", "btnBuscar.y": "10",
    }
    post = urllib.request.Request(
        URL, data=urllib.parse.urlencode(datos).encode(),
        headers={"User-Agent": UA, "Content-Type": "application/x-www-form-urlencoded"})
    res = urllib.request.urlopen(post, timeout=90, context=_ctx).read().decode("utf-8", "ignore")

    obs = []
    for fila in re.findall(r"<tr[^>]*>(.*?)</tr>", res, re.S):
        c = [html.unescape(re.sub(r"<[^>]+>", "", x)).strip()
             for x in re.findall(r"<t[dh][^>]*>(.*?)</t[dh]>", fila, re.S)]
        if len(c) < 8 or not re.match(r"\d{2}/\d{2}/\d{4}", c[0]):
            continue
        try:
            obs.append({"fecha": c[0], "producto": c[1], "calidad": c[2],
                        "origen": c[4], "min": float(c[5]), "max": float(c[6]),
                        "frecuente": float(c[7])})
        except ValueError:
            continue
    return obs


def por_producto(obs):
    """Se queda con la observación más reciente de cada producto."""
    def clave(o):
        d, m, a = o["fecha"].split("/")
        return (a, m, d)
    salida = {}
    for o in sorted(obs, key=clave):
        salida[o["producto"]] = o          # el último sobrescribe: el más nuevo gana
    return salida


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("productos", nargs="*", help="nombres exactos como los publica SNIIM")
    ap.add_argument("--listar", action="store_true", help="todo lo disponible")
    ap.add_argument("--chihuahua", action="store_true", help="central de Chihuahua capital")
    ap.add_argument("--json", action="store_true", help="salida en JSON")
    a = ap.parse_args()

    destino = CHIHUAHUA if a.chihuahua else JUAREZ
    try:
        obs = consultar(destino)
    except Exception as e:
        print(f"No se pudo consultar SNIIM: {type(e).__name__}: {e}", file=sys.stderr)
        return 1

    datos = por_producto(obs)
    if not datos:
        print("SNIIM no devolvió datos para este periodo (¿días inhábiles?)", file=sys.stderr)
        return 1

    if a.json:
        print(json.dumps({k: v for k, v in datos.items()}, ensure_ascii=False, indent=1))
        return 0

    sel = a.productos or sorted(datos)
    print(f"{len(datos)} productos en el mercado de abasto, {len(obs)} observaciones\n")
    print(f'{"PRODUCTO":34} {"FRECUENTE":>10} {"MIN":>8} {"MAX":>8}   FECHA')
    for n in sel:
        d = datos.get(n)
        if not d:
            parecidos = [k for k in datos if n.lower() in k.lower()]
            print(f"  {n:32} sin dato" + (f"   ¿querías {parecidos[:3]}?" if parecidos else ""))
            continue
        print(f'  {d["producto"][:32]:32} {d["frecuente"]:9.2f} {d["min"]:8.2f} {d["max"]:8.2f}   {d["fecha"]}')
    print("\nPrecios por kilogramo, al MAYOREO. En tienda se paga bastante más.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
