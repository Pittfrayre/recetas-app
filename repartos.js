/* Preparaciones que se sirven por separado. Las fracciones reparten un
   ingrediente compartido; el resto pertenece al platillo principal.
   Revisado contra los pasos de las 45 recetas, octubre de 2026.
   Son estimaciones culinarias, no rendimientos medidos de estas recetas. */
const REPARTOS_RECETAS = {
  'wrap-pollo': {principal:'Wrap completo', modo:'fresco'},
  'bowl-carne': {principal:'Carne sazonada', lados:[
    {nombre:'Arroz', ingredientes:{'Arroz':1}},
    {nombre:'Frijoles', ingredientes:{'Frijoles cocidos':1}},
    {nombre:'Ensalada y pico de gallo', modo:'fresco', ingredientes:{'Lechuga romana':1,'Aguacate':1,'Jitomate':1,'Cebolla blanca':1,'Cilantro':1,'Limón':1}}
  ]},
  'tilapia-horno': {principal:'Tilapia sazonada', lados:[
    {nombre:'Verduras al horno', ingredientes:{'Ejotes':1,'Zanahoria':1,'Brócoli':1}},
    {nombre:'Arroz', ingredientes:{'Arroz':1}}
  ]},
  'atun-sellado': {principal:'Atún con vinagreta', factores:{'Lomo de atún':0.9}, lados:[
    {nombre:'Verduras salteadas', ingredientes:{'Pimiento morrón':1,'Brócoli':1}},
    {nombre:'Arroz', ingredientes:{'Arroz':1}}
  ]},
  'ensalada-pollo': {principal:'Ensalada de pollo con ranch', modo:'fresco'},
  'lentejas-huevo': {principal:'Lentejas guisadas', lados:[{nombre:'Huevo cocido', ingredientes:{'Huevo':1}}]},
  'tinga-pollo-frijoles': {principal:'Tinga de pollo', lados:[{nombre:'Frijoles', ingredientes:{'Frijoles cocidos':1}}]},
  'pasta-atun-espinaca': {principal:'Pasta con atún y verduras'},
  'garbanzo-sardina': {principal:'Garbanzos con sardina'},
  'nopales-huevo': {principal:'Nopales con huevo', lados:[
    {nombre:'Frijoles', ingredientes:{'Frijoles cocidos':1}},
    {nombre:'Tortillas', ingredientes:{'Tortilla integral grande':1}}
  ]},
  'arroz-con-pollo': {principal:'Arroz con pollo y verduras'},
  'frittata-papa-espinaca': {principal:'Frittata completa'},
  'pasta-pollo-brocoli': {principal:'Pasta con pollo, brócoli y salsa'},
  'pollo-limon-arroz': {principal:'Pollo al limón', lados:[
    {nombre:'Arroz', ingredientes:{'Arroz':1}},
    {nombre:'Verduras al horno', ingredientes:{'Brócoli':1,'Zanahoria':1,'Aceite de oliva':1/3,'Ajo en polvo':1}}
  ]},
  'pasta-mediterranea-pollo': {principal:'Pasta con pollo y verduras'},
  'fajitas-pollo': {principal:'Fajitas de pollo', lados:[
    {nombre:'Frijoles', ingredientes:{'Frijoles cocidos':1}},
    {nombre:'Tortillas', ingredientes:{'Tortilla de maíz':1}},
    {nombre:'Salsa fresca', modo:'fresco', ingredientes:{'Jitomate':1,'Cilantro':1,'Limón':1/3,'Cebolla blanca':0.1}}
  ]},
  'pollo-teriyaki': {principal:'Pollo teriyaki con verduras', agua:60, lados:[{nombre:'Arroz', ingredientes:{'Arroz':1}}]},
  'picadillo-papa': {principal:'Picadillo con papa', agua:120, lados:[
    {nombre:'Ensalada', modo:'fresco', ingredientes:{'Lechuga romana':1,'Pepino':1,'Jitomate':110/360,'Limón':1,'Aceite de oliva':2/3}}
  ]},
  'bowl-mediterraneo-pollo': {principal:'Pollo sazonado', lados:[
    {nombre:'Arroz', ingredientes:{'Arroz':1}},
    {nombre:'Garbanzos', ingredientes:{'Garbanzo':1}},
    {nombre:'Ensalada', modo:'fresco', ingredientes:{'Pepino':1,'Jitomate':1,'Espinaca fresca':1}},
    {nombre:'Salsa de yogur', modo:'fresco', agua:15, ingredientes:{'Yogur griego natural':1,'Limón':0.5,'Ajo':1/6,'Orégano':0.25}}
  ]},
  'pollo-chipotle': {principal:'Pollo con salsa de chipotle', lados:[
    {nombre:'Arroz', ingredientes:{'Arroz':1}},
    {nombre:'Brócoli', ingredientes:{'Brócoli':1}}
  ]},
  'albondigas-pure': {principal:'Albóndigas con salsa', agua:150, lados:[
    {nombre:'Puré de papa', ingredientes:{'Papa':1,'Leche':1,'Aceite de oliva':1}},
    {nombre:'Brócoli', ingredientes:{'Brócoli':1}}
  ]},
  'coliflor-ajo-pimenton': {principal:'Coliflor con salsa de pimentón'},
  'sunomono-pepino': {principal:'Pepino con aliño', modo:'fresco'},
  'quinoa-cocida': {principal:'Quinoa'},
  'wraps-lechuga-pollo': {principal:'Wraps completos', modo:'fresco'},
  'rollitos-zanahoria-atun': {principal:'Rollitos completos', modo:'fresco'},
  'rollitos-verdes-espinaca': {principal:'Rollitos completos', modo:'fresco'},
  'ensalada-quinoa-legumbres': {principal:'Ensalada completa', modo:'fresco'},
  'quinoa-mexicana': {principal:'Quinoa con frijoles y jitomate', lados:[{nombre:'Aguacate', modo:'fresco', ingredientes:{'Aguacate':1}}]},
  'quinoa-coliflor-espinaca': {principal:'Quinoa con coliflor y espinaca'},
  'bowl-quinoa-pollo': {principal:'Pollo', lados:[
    {nombre:'Quinoa', ingredientes:{'Quinoa':1}},
    {nombre:'Ensalada con frijoles', modo:'fresco', ingredientes:{'Lechuga romana':1,'Zanahoria':1,'Jitomate':1,'Frijoles cocidos':1}},
    {nombre:'Aliño de yogur', modo:'fresco', ingredientes:{'Yogur griego natural':1,'Mayonesa light':1,'Limón':1}}
  ]},
  'sopa-quinoa-alubias': {principal:'Sopa completa', modo:'sopa'},
  'ensalada-pollo-manzana': {principal:'Ensalada completa', modo:'fresco'},
  'sopa-verduras-avena-huevo': {principal:'Sopa completa', modo:'sopa', agua:2500},
  'crema-papa-pollo': {principal:'Crema con pollo', modo:'sopa', agua:1500, lados:[{nombre:'Crotones', ingredientes:{'Pan':1}}]},
  'minestrone-verduras': {principal:'Minestrone completo', modo:'sopa', agua:2000},
  'sopa-pollo-bolitas-maiz': {principal:'Sopa con pollo y bolitas', modo:'sopa', agua:2000},
  'sopa-letras-res': {principal:'Sopa con res y letras', modo:'sopa', agua:2000},
  'crema-coliflor-espinaca': {principal:'Crema completa', modo:'sopa', agua:1000},
  'pollo-verduras-horno': {principal:'Pollo', lados:[
    {nombre:'Verduras al horno', ingredientes:{'Camote':1,'Zanahoria':1,'Ejotes':1,'Aceite de oliva':0.5,'Tomillo':1,'Romero':1,'Ajo en polvo':1}},
    {nombre:'Salsa de yogur', modo:'fresco', ingredientes:{'Yogur griego natural':1,'Limón':1,'Vinagre de manzana':1,'Mostaza':1,'Miel':1}}
  ]},
  'pollo-cremoso-pimenton': {principal:'Pollo con salsa de pimentón', factores:{'Harina de trigo':0.5}, lados:[{nombre:'Camote', ingredientes:{'Camote':1}}]},
  'pollo-arroz-amarillo': {principal:'Pollo sazonado', lados:[
    {nombre:'Arroz amarillo', ingredientes:{'Arroz':1,'Aceite de oliva':0.5,'Ajo en polvo':0.5,'Cúrcuma':1,'Comino':0.5}},
    {nombre:'Ensalada con aliño', modo:'fresco', ingredientes:{'Lechuga romana':1,'Pepino':1,'Jitomate':1,'Aguacate':1,'Yogur griego natural':1,'Limón':0.5}}
  ]},
  'burrito-zanahoria-pollo': {principal:'Burrito completo', modo:'fresco'},
  'empanada-aguacate-huevo': {principal:'Empanada completa', modo:'fresco'},
  'camarones-ajo-cilantro': {principal:'Camarones con salsa', lados:[{nombre:'Arroz', ingredientes:{'Arroz':1}}]}
};

/* Pesos comestibles aproximados por pieza y densidades. No son los pesos
   de compra usados para precios. Ajustes de cocción de referencia:
   carne deshuesada .75; pescado/marisco .8; pierna con hueso .55;
   arroz seco 2.8; quinoa 2.7; pasta/legumbre seca 2.5; verdura cocida .9.
   En sopa, la hidratación sale del caldo contado y no se suma otra vez.
   Los pesos finales se redondean a 5 g y se muestran siempre como ≈. */
const PESO_PIEZA_REPARTO = {'Aguacate':140,'Ajo':5,'Huevo':50,'Limón':28,'Tortilla de maíz':30,'Tortilla integral grande':45};
const DENSIDAD_REPARTO = {'Aceite de oliva':0.91,'Leche':1.03,'Salsa de soya':1.16,'Caldo de pollo':1,'Vinagre de arroz':1,'Vinagre de manzana':1};
const RENDIMIENTO_REPARTO = {'Pechuga de pollo':0.75,'Pierna con muslo de pollo':0.55,'Carne molida de res 80/20':0.75,'Filete de tilapia':0.8,'Lomo de atún':0.8,'Camarón':0.8,'Arroz':2.8,'Quinoa':2.7,'Pasta para sopa':2.5,'Pasta de letras':2.5,'Lenteja':2.5,'Garbanzo':2.5};
