# Sunú

App web instalable (PWA) para descubrir recetas, planear las comidas de la semana y preparar el mandado según el presupuesto.

Abre [Sunú](https://pittfrayre.github.io/recetas-app/). En iPhone: Safari → Compartir → Agregar a inicio.

## Funciones

- Recetas con fotos, búsqueda por nombre o ingrediente y filtros de familia, ingrediente principal y etiquetas.
- Plan de lunes a domingo con comensales, factores de porción e invitados por día.
- Ingredientes y dosis por paso calculados para una porción o lo que necesitas cocinar; reparto por lonche para usar con báscula.
- Mandado consolidado por pasillo, precios editables y presupuesto. Cuando cambia el plan, la lista se marca como desfasada y se actualiza manualmente.
- Modo claro y oscuro, persistencia local y caché para abrir sin conexión tras la primera carga.

## Datos

Los datos públicos viven en datos/ y se consultan sin token. Ajustes → Buscar recetas nuevas permite sincronizar manualmente. El formulario Nueva receta sigue siendo una muestra sin guardado conectado.

## Identidad

Logo Acento e ícono circular aprobados para Sunú. Paleta Maíz y Oliva: marfil #F7F3E8, oliva #3F4B36, carbón #292822, maíz #E7C66B y terracota #A6563E. Tipografía: Cormorant Garamond para títulos y Manrope para lectura y controles, alojadas localmente con sus licencias OFL en assets/fonts/.

## Desarrollo

HTML, CSS y JavaScript, sin compilación. Servir esta carpeta con un servidor HTTP local; por ejemplo: python -m http.server 8765. index.html contiene las cuatro vistas; app.js conserva cálculos y persistencia; sw.js administra el caché.
