# Recetas

App web instalable (PWA) para planear comidas de la semana y generar la lista del mandado
con precios reales, pensada para Ciudad Juárez.

**Este repo sólo contiene el código.** Las recetas y los precios viven en un repo de datos
privado y aparte; la app los lee con un token personal que se guarda únicamente en el
teléfono de quien la usa.

## Qué hace

- **Recetas** con foto, proteína y costo por porción; búsqueda por nombre o ingrediente.
- **Plan semanal** de lunes a domingo: asignas una receta a cada día.
- **Reparto por lonche**: cada persona tiene un factor de porción (por ejemplo 1.0 y 1.3),
  y la app dice cuántos gramos de cada cosa van en cada táper. Para usarse con báscula.
- **Lista del mandado** consolidada por pasillo, con barra de presupuesto. Suma los
  ingredientes repetidos entre recetas.
- **Precios editables**: se guardan por unidad, así que se recalculan solos cuando cambian
  las porciones o los días.
- Funciona **sin internet** una vez instalada.

## Instalar en iPhone

Abre la página en Safari → botón Compartir → **Agregar a inicio**.

## Configurar los datos

En **Ajustes → Sincronización con GitHub**:

1. Repositorio de datos: `tu-usuario/tu-repo-de-datos`
2. Token personal: un [fine-grained token](https://github.com/settings/personal-access-tokens)
   con acceso únicamente a ese repo y permiso *Contents: Read and write*.
3. **Conectar**.

El token se guarda en `localStorage` del navegador y sólo viaja a `api.github.com`.

## Estructura

```
index.html            una sola pantalla, cuatro pestañas
styles.css            tokens de color, claro y oscuro
app.js                estado, vistas y cálculo de porciones
github.js             lectura y escritura del repo de datos
sw.js                 caché para uso sin internet
img/                  fotos (Pexels, licencia libre — ver img/CREDITS.txt)
```

Sin dependencias ni paso de compilación: es HTML, CSS y JavaScript a secas.
Para probarlo en local basta con `python -m http.server`.
