/* ============================================================
   Recetas — prototipo v0.2
   Fotos: Pexels (licencia libre). Ver img/CREDITS.txt
   Al publicar, las recetas vienen del repo privado de GitHub.
   ============================================================ */

const PASILLOS = ['Carnes y pescado','Frutas y verduras','Lácteos','Abarrotes','Panadería','Especias'];

const DIAS = [
  {k:'lun', n:'LUN', l:'Lunes'},    {k:'mar', n:'MAR', l:'Martes'},
  {k:'mie', n:'MIÉ', l:'Miércoles'},{k:'jue', n:'JUE', l:'Jueves'},
  {k:'vie', n:'VIE', l:'Viernes'},  {k:'sab', n:'SÁB', l:'Sábado'},
  {k:'dom', n:'DOM', l:'Domingo'}
];

let RECETAS = [
  {
    id:'wrap-pollo', nombre:'Wrap de pollo a la plancha', emoji:'🌯',
    categoria:'Comida', porciones:4, tiempo:30, kcal:480, proteina:42,
    tags:['Alto en proteína','Apto embarazo'],
    ingredientes:[
      {n:'Pechuga de pollo', c:700, u:'g', p:'Carnes y pescado', precio:112},
      {n:'Tortilla integral grande', c:4, u:'pz', p:'Panadería', precio:21},
      {n:'Pimiento morrón', c:1, u:'pz', p:'Frutas y verduras', precio:18},
      {n:'Cebolla morada', c:0.5, u:'pz', p:'Frutas y verduras', precio:6},
      {n:'Espinaca fresca', c:100, u:'g', p:'Frutas y verduras', precio:25},
      {n:'Aguacate', c:1, u:'pz', p:'Frutas y verduras', precio:20},
      {n:'Jitomate', c:1, u:'pz', p:'Frutas y verduras', precio:8},
      {n:'Yogur griego natural', c:60, u:'g', p:'Lácteos', precio:12},
      {n:'Limón', c:1, u:'pz', p:'Frutas y verduras', precio:3},
      {n:'Aceite de oliva', c:15, u:'ml', p:'Abarrotes', precio:6},
      {n:'Ajo en polvo, comino y paprika', c:6, u:'g', p:'Especias', precio:5}
    ],
    pasos:[
      'Corta la pechuga en tiras delgadas y sazona con ajo en polvo, comino, paprika, sal y pimienta.',
      'Cocina en sartén con aceite de oliva a fuego medio-alto hasta que no quede nada rosa por dentro.',
      'Rebana el pimiento, la cebolla y el jitomate en tiras finas. Lava bien la espinaca.',
      'Mezcla el yogur griego con jugo de limón, sal y pimienta para el aderezo.',
      'Calienta las tortillas, rellena con pollo, verduras, aguacate y aderezo. Enrolla y envuelve para llevar.'
    ],
    notas:'Embarazo: el pollo debe quedar completamente cocido, sin partes rosadas. Lava bien la espinaca antes de usarla.'
  },
  {
    id:'bowl-carne', nombre:'Bowl de carne estilo burrito', emoji:'🥙',
    categoria:'Comida', porciones:4, tiempo:35, kcal:620, proteina:38,
    tags:['Alto en hierro','Económico'],
    ingredientes:[
      {n:'Carne molida de res 80/20', c:550, u:'g', p:'Carnes y pescado', precio:81},
      {n:'Arroz', c:200, u:'g', p:'Abarrotes', precio:6},
      {n:'Frijoles cocidos', c:250, u:'g', p:'Abarrotes', precio:12},
      {n:'Jitomate', c:2, u:'pz', p:'Frutas y verduras', precio:16},
      {n:'Cebolla blanca', c:0.5, u:'pz', p:'Frutas y verduras', precio:5},
      {n:'Limón', c:2, u:'pz', p:'Frutas y verduras', precio:6},
      {n:'Aguacate', c:1, u:'pz', p:'Frutas y verduras', precio:20},
      {n:'Queso panela', c:100, u:'g', p:'Lácteos', precio:18},
      {n:'Comino, orégano y ajo en polvo', c:6, u:'g', p:'Especias', precio:5}
    ],
    pasos:[
      'Cuece el arroz según las instrucciones del paquete.',
      'Dora la carne molida a fuego medio-alto desmenuzando bien, hasta que no quede nada rosa. Sazona con las especias.',
      'Pica finamente el jitomate y la cebolla, mezcla con jugo de limón para el pico de gallo.',
      'Calienta los frijoles en una olla pequeña.',
      'Arma el bowl: base de arroz, carne, frijoles, pico de gallo, aguacate en cubos y queso panela rallado.'
    ],
    notas:'Embarazo: la carne debe quedar completamente cocida y el queso panela pasteurizado. El hierro de la res se absorbe mejor con el limón del pico de gallo.'
  },
  {
    id:'tilapia-horno', nombre:'Tilapia al horno con verduras', emoji:'🐟',
    categoria:'Comida', porciones:2, tiempo:30, kcal:420, proteina:44,
    tags:['Bajo en mercurio','Apto embarazo','Ligero'],
    ingredientes:[
      {n:'Filete de tilapia', c:400, u:'g', p:'Carnes y pescado', precio:46},
      {n:'Ejotes', c:150, u:'g', p:'Frutas y verduras', precio:15},
      {n:'Zanahoria', c:1, u:'pz', p:'Frutas y verduras', precio:5},
      {n:'Brócoli', c:200, u:'g', p:'Frutas y verduras', precio:18},
      {n:'Limón', c:1, u:'pz', p:'Frutas y verduras', precio:3},
      {n:'Aceite de oliva', c:15, u:'ml', p:'Abarrotes', precio:6},
      {n:'Arroz', c:100, u:'g', p:'Abarrotes', precio:3},
      {n:'Ajo en polvo, paprika y perejil', c:6, u:'g', p:'Especias', precio:5}
    ],
    pasos:[
      'Precalienta el horno a 200 °C.',
      'Coloca la tilapia en una charola, rocía con aceite de oliva y jugo de limón. Sazona con las especias, sal y pimienta.',
      'Limpia los ejotes, corta la zanahoria en rodajas y agrega el brócoli. Acomoda todo junto al pescado.',
      'Hornea hasta que el pescado se desmenuce fácil con un tenedor y esté opaco por dentro.',
      'Mientras tanto, cuece el arroz. Sirve el pescado con las verduras y el arroz.'
    ],
    notas:'Embarazo: la tilapia es de bajo mercurio y segura, siempre que quede bien cocida (opaca y se desmenuza fácil).'
  },
  {
    id:'atun-sellado', nombre:'Atún sellado con vinagreta cítrica', emoji:'🍣',
    categoria:'Comida', porciones:2, tiempo:25, kcal:510, proteina:52,
    tags:['Alto en proteína','Omega 3'],
    ingredientes:[
      {n:'Lomo de atún', c:450, u:'g', p:'Carnes y pescado', precio:135},
      {n:'Arroz', c:200, u:'g', p:'Abarrotes', precio:6},
      {n:'Pimiento morrón', c:1, u:'pz', p:'Frutas y verduras', precio:18},
      {n:'Brócoli', c:200, u:'g', p:'Frutas y verduras', precio:18},
      {n:'Limón', c:1, u:'pz', p:'Frutas y verduras', precio:3},
      {n:'Ajo', c:1, u:'pz', p:'Frutas y verduras', precio:2},
      {n:'Vinagre de manzana', c:15, u:'ml', p:'Abarrotes', precio:4},
      {n:'Aceite de oliva', c:20, u:'ml', p:'Abarrotes', precio:8},
      {n:'Miel', c:5, u:'g', p:'Abarrotes', precio:3}
    ],
    pasos:[
      'Vinagreta: mezcla jugo de limón, vinagre de manzana, aceite de oliva, ajo picado, una pizca de orégano y una cucharadita de miel.',
      'Saltea el pimiento en tiras y el brócoli 5-6 minutos a fuego medio-alto, que queden suaves pero con crunch.',
      'Seca bien el lomo de atún y sazona con sal y pimienta por ambos lados.',
      'En sartén bien caliente, sella el atún 1-2 minutos por lado: dorado por fuera, rosado al centro.',
      'Rebana en tiras, sirve sobre el arroz con las verduras y baña con la vinagreta.'
    ],
    notas:'Embarazo: el atún sellado queda crudo al centro. Para esa porción dale 2-3 minutos más por lado hasta que quede opaco en todo el grosor.'
  },
  {
    id:'ensalada-pollo', nombre:'Ensalada de pollo marinado', emoji:'🥗',
    categoria:'Comida', porciones:2, tiempo:25, kcal:380, proteina:40,
    tags:['Alto en proteína','Ligero'],
    ingredientes:[
      {n:'Pechuga de pollo', c:350, u:'g', p:'Carnes y pescado', precio:56},
      {n:'Lechuga romana', c:1, u:'pz', p:'Frutas y verduras', precio:22},
      {n:'Jitomate cherry', c:150, u:'g', p:'Frutas y verduras', precio:25},
      {n:'Pepino', c:1, u:'pz', p:'Frutas y verduras', precio:8},
      {n:'Cebolla morada', c:0.5, u:'pz', p:'Frutas y verduras', precio:6},
      {n:'Aguacate', c:1, u:'pz', p:'Frutas y verduras', precio:20},
      {n:'Limón', c:2, u:'pz', p:'Frutas y verduras', precio:6},
      {n:'Ajo', c:2, u:'pz', p:'Frutas y verduras', precio:3},
      {n:'Aceite de oliva', c:15, u:'ml', p:'Abarrotes', precio:6},
      {n:'Orégano', c:2, u:'g', p:'Especias', precio:3}
    ],
    pasos:[
      'Marina la pechuga con jugo de limón, ajo machacado, orégano, sal, pimienta y aceite de oliva. Deja reposar 20 minutos (mejor 1 hora en el refri).',
      'Cocina a la plancha a fuego medio hasta que esté bien cocida por dentro, volteando a la mitad.',
      'Pica la lechuga, parte los cherry por la mitad y rebana el pepino y la cebolla morada.',
      'Rebana el pollo en tiras y colócalo sobre la ensalada con el aguacate en gajos.',
      'Adereza con un chorrito de limón y aceite de oliva.'
    ],
    notas:'Embarazo: lava y desinfecta muy bien las hojas de lechuga antes de servir.'
  }
];

/* ============================================================
   Estado
   ============================================================ */
const S = {
  vista:'recetas', filtro:'Todas', busqueda:'',
  personas:[
    { id:'p1', nombre:'Persona 1', nota:'Embarazo',      factor:1.0 },
    { id:'p2', nombre:'Persona 2', nota:'Entrenamiento', factor:1.3 }
  ],
  // Cada día: qué se cocina y quiénes comen ese día en particular
  semana:{
    lun:{ receta:'wrap-pollo',    comensales:['p1','p2'], invitados:[] },
    mar:{ receta:'bowl-carne',    comensales:['p1','p2'], invitados:[] },
    mie:{ receta:'wrap-pollo',    comensales:['p1','p2'], invitados:[] },
    jue:{ receta:'bowl-carne',    comensales:['p1','p2'], invitados:[] },
    vie:{ receta:'tilapia-horno', comensales:['p1','p2'], invitados:[] },
    sab:null, dom:null
  },
  pasoDia:'receta',      // 'receta' | 'comensales'
  nuevoInvitado:null,    // {nombre, factor} mientras se captura
  precios:{},        // { ingrediente: precio por unidad }  ← lo que tú corriges a mano
  catalogo:{},       // lista maestra: { ingrediente: {unidad, pasillo, precio_referencia, profeco} }
  profeco:{},        // { ingrediente: {precio_unidad, mas_barato, ...} } ← robot semanal
  sync:{ estado:'local', fecha:null, sha:null, recetasDeGitHub:false },
  lista:null,
  marcados:{},
  presupuesto:1500,
  diaEditando:null
};

/* ============================================================
   Utilidades
   ============================================================ */
const $  = (s,r=document) => r.querySelector(s);
const $$ = (s,r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const mxn = n => '$' + Math.round(n).toLocaleString('es-MX');
const rec = id => RECETAS.find(r => r.id === id);

function fmtCant(c,u){
  if (u==='g'  && c>=1000) return (c/1000).toFixed(c%1000===0?0:1)+' kg';
  if (u==='ml' && c>=1000) return (c/1000).toFixed(c%1000===0?0:1)+' L';
  if (u==='pz'){ const r=Math.ceil(c-0.001); return r+(r===1?' pieza':' piezas'); }
  return (c>=10 ? Math.round(c) : Math.round(c*10)/10)+' '+u;
}
// Para la báscula: siempre en gramos/ml exactos, sin redondear a kg
function fmtBascula(c,u){
  if (u==='pz') return (Math.round(c*10)/10)+' pz';
  return Math.round(c)+' '+u;
}

let _alertaOk = null;
function confirmar(titulo, texto, etiquetaOk, alAceptar, { destructivo = false } = {}){
  if ($('#alerta').classList.contains('on')) return;   // nunca apilar diálogos
  _alertaOk = alAceptar;
  $('#alertaCuerpo').innerHTML =
    `<h4>${esc(titulo)}</h4><p>${esc(texto)}</p>`;
  $('#alertaOk').textContent = etiquetaOk;
  $('#alertaOk').className = destructivo ? 'danger' : '';
  $('#alerta').classList.add('on');
}
function cerrarAlerta(){ $('#alerta').classList.remove('on'); _alertaOk = null; }

/* El plan cambió y ya hay lista: preguntamos si la rehacemos.
   Va con retraso para que una ráfaga de ajustes pregunte una sola vez. */
let _tPlan = null;
function planCambio(){
  if (!S.lista) return;
  clearTimeout(_tPlan);
  _tPlan = setTimeout(() => {
    confirmar('Cambiaste el plan',
      'Tu lista del mandado quedó de antes. ¿La actualizo con las recetas de esta semana?',
      'Actualizar',
      () => { generarLista(); if (S.vista === 'mandado') renderMandado(); toast('Lista actualizada'); });
  }, 700);
}

/* Se marcó el último artículo */
function revisarCompraTerminada(){
  if (!S.lista) return;
  if (S.lista.n - Object.keys(S.marcados).length !== 0) return;
  confirmar('Terminaste la compra',
    `Marcaste los ${S.lista.n} artículos de la lista. ¿La limpio para la próxima semana?`,
    'Limpiar',
    () => { S.lista = null; S.marcados = {}; renderMandado(); toast('Lista limpia'); },
    { destructivo:true });
}

function toast(msg){
  const t=$('#toast'); t.textContent=msg; t.classList.add('on');
  clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('on'),2200);
}

/* --- precios (con overrides editables) --- */
/* La lista maestra manda. Las recetas solo dicen nombre y cantidad; la unidad,
   el pasillo y el precio salen de aquí. Los campos sueltos de una receta vieja
   se usan solo como respaldo mientras termina de migrar. */
const maestra  = n => S.catalogo[n] || null;
const unidadDe = i => (maestra(i.n) || {}).unidad  || i.u || 'g';
const pasilloDe= i => (maestra(i.n) || {}).pasillo || i.p || 'Abarrotes';

// Prioridad: lo que tú corregiste > PROFECO de esta semana > referencia de la maestra
function precioUnit(i){
  if (S.precios[i.n] !== undefined)  return S.precios[i.n];
  if (S.profeco[i.n])                return S.profeco[i.n].precio_unidad;
  const m = maestra(i.n);
  if (m && m.precio_referencia)      return m.precio_referencia;
  return i.precio && i.c ? i.precio / i.c : 0;
}
const fuentePrecio = n =>
  S.precios[n] !== undefined ? 'tuyo' : (S.profeco[n] ? 'profeco' : 'referencia');
const ETIQUETA_FUENTE = { tuyo:'tu precio', profeco:'PROFECO', referencia:'estimado' };
const precioIng  = (i,m=1) => precioUnit(i) * i.c * m;
const editado    = n => S.precios[n] !== undefined;

/* --- plan semanal --- */
const persona    = id => S.personas.find(p => p.id === id);
const nuevoId    = () => 'p' + Date.now().toString(36);

/* Quién come tal día: los de casa que marcaste, más los invitados de ese día */
function comensales(k){
  const d = S.semana[k];
  if (!d) return [];
  return [
    ...(d.comensales || []).map(persona).filter(Boolean),
    ...(d.invitados  || []).map(g => ({ ...g, invitado:true }))
  ];
}
const factorDia  = k  => comensales(k).reduce((a,p)=>a+p.factor, 0);
const diasDeRec  = id => DIAS.filter(d => S.semana[d.k] && S.semana[d.k].receta === id);
const diasDe     = id => diasDeRec(id).length;
const diasTotal  = () => DIAS.filter(d => S.semana[d.k] && S.semana[d.k].receta).length;
const enPlan     = () => RECETAS.filter(r => diasDe(r.id) > 0);
/* Porciones que hay que cocinar: suma de los factores de todos los que comen */
const porcionesDe= r  => diasDeRec(r.id).reduce((a,d)=>a+factorDia(d.k), 0);
const multDe     = r  => porcionesDe(r) / r.porciones;
const costoRec   = (r,m=1) => r.ingredientes.reduce((a,i)=>a+precioIng(i,m),0);

/* Cada quien recibe exactamente 'su factor' de porciones base, así que la
   cantidad por lonche no depende de cuántos días se repita la receta. */
function reparto(r){
  return diasDeRec(r.id).map(d => {
    const gente = comensales(d.k);
    return {
      dia: d,
      comensales: gente,
      filas: r.ingredientes.map(i => ({
        n:i.n, u:unidadDe(i),
        por: gente.map(p => i.c * p.factor / r.porciones)
      // Nada de "0.1 pz de cebolla": solo lo que vale la pena pesar
      })).filter(f => f.por.length && Math.max(...f.por) >= (f.u==='pz' ? 0.5 : 10))
    };
  });
}
/* Firma para saber si todos los días comen los mismos */
const firmaComensales = g => g.comensales.map(p=>p.nombre+':'+p.factor).join('|');

/* ============================================================
   Vista: Recetas
   ============================================================ */
function renderChips(){
  const cats=['Todas','Alto en proteína','Apto embarazo','Ligero','Económico'];
  $('#chips').innerHTML = cats.map(c =>
    `<button class="chip ${c===S.filtro?'on':''}" data-c="${esc(c)}">${esc(c)}</button>`).join('');
}

function renderRecetas(){
  const q = S.busqueda.trim().toLowerCase();
  const list = RECETAS.filter(r => {
    if (S.filtro!=='Todas' && !r.tags.includes(S.filtro)) return false;
    if (!q) return true;
    return r.nombre.toLowerCase().includes(q) || r.ingredientes.some(i=>i.n.toLowerCase().includes(q));
  });

  if(!list.length){
    $('#rlist').innerHTML = `<div class="empty"><div class="ico">🔍</div><b>Sin resultados</b>
      <p>No hay recetas que coincidan con tu búsqueda.</p></div>`;
    return;
  }

  $('#rlist').innerHTML = list.map(r => {
    const d = diasDe(r.id);
    return `<button class="rcard" data-r="${r.id}">
      <div class="thumb"><img src="img/${r.id}-sq.jpg" alt="" loading="lazy"></div>
      <div class="rcard-body">
        <p class="rcard-name">${esc(r.nombre)}</p>
        <div class="rmeta">
          <span>${r.tiempo} min</span>
          <span><b>${r.proteina} g</b> proteína</span>
          <span>${mxn(costoRec(r)/r.porciones)} / porción</span>
        </div>
        <div class="tagrow">
          ${r.tags.map(t=>`<span class="tag ${t==='Alto en proteína'?'p':t==='Apto embarazo'?'e':''}">${esc(t)}</span>`).join('')}
          ${d?`<span class="tag p">${d} día${d>1?'s':''} esta semana</span>`:''}
        </div>
      </div>
    </button>`;
  }).join('');
}

/* ============================================================
   Vista: Plan (calendario semanal)
   ============================================================ */
function renderPlan(){
  const dias  = diasTotal();
  const recs  = enPlan();
  const costo = recs.reduce((a,r)=>a+costoRec(r,multDe(r)),0);
  const prot  = dias ? recs.reduce((a,r)=>a+r.proteina*diasDe(r.id),0)/dias : 0;
  const porc  = DIAS.reduce((a,d)=>a+factorDia(d.k), 0);
  const hoy   = (new Date().getDay()+6)%7;

  $('#planSummary').innerHTML = `
    <div class="big">${dias} ${dias===1?'comida':'comidas'}</div>
    <div class="lbl">${porc.toFixed(1).replace('.0','')} porciones en total esta semana</div>
    <div class="sgrid">
      <div><b>${mxn(costo)}</b><span>Costo</span></div>
      <div><b>${Math.round(prot)} g</b><span>Proteína</span></div>
      <div><b>${recs.length}</b><span>Recetas</span></div>
    </div>`;

  $('#semana').innerHTML = DIAS.map((d,ix) => {
    const dd = S.semana[d.k];
    const r  = dd && rec(dd.receta);
    const g  = comensales(d.k);
    return `<button class="day ${ix===hoy?'today':''}" data-dia="${d.k}">
      <div class="day-n"><b>${d.n}</b><span>${ix===hoy?'hoy':''}</span></div>
      ${r ? `<div class="thumb"><img src="img/${r.id}-sq.jpg" alt="" loading="lazy"></div>`
          : `<div class="dash">+</div>`}
      <div class="day-t ${r?'':'off'}">
        <strong>${r?esc(r.nombre):'Sin asignar'}</strong>
        ${r ? (g.length
                ? `<div class="quienes">${g.map(p=>
                     `<span class="pill ${p.invitado?'inv':''}">${esc(p.nombre)}</span>`).join('')}</div>`
                : `<span style="color:var(--danger)">Falta elegir quién come</span>`)
            : `<span>Toca para elegir receta</span>`}
      </div>
      <div class="chev"></div>
    </button>`;
  }).join('');

  $('#genList').disabled = !DIAS.some(d => S.semana[d.k] && S.semana[d.k].receta && factorDia(d.k) > 0);
}

/* ============================================================
   Hoja del día: primero la receta, luego quién come
   ============================================================ */
function sheetDia(k, paso){
  S.diaEditando = k;
  if (paso) S.pasoDia = paso;
  const d  = DIAS.find(x=>x.k===k);
  const dd = S.semana[k];

  if (S.pasoDia === 'receta' || !dd){
    abrirSheet(d.l, `
      <p class="price-hint" style="text-align:left;padding:0 4px 12px">Paso 1 de 2 · ¿Qué se cocina?</p>
      <div class="card">
        ${RECETAS.map(r=>`
          <button class="day" data-pick="${r.id}">
            <div class="thumb"><img src="img/${r.id}-sq.jpg" alt="" loading="lazy"></div>
            <div class="day-t">
              <strong>${esc(r.nombre)}</strong>
              <span>${r.tiempo} min · ${r.proteina} g proteína · ${mxn(costoRec(r)/r.porciones)}/porción</span>
            </div>
            ${dd && dd.receta===r.id ? `<span class="tag p">Elegida</span>` : `<div class="chev"></div>`}
          </button>`).join('')}
      </div>
      ${dd?`<div style="margin-top:16px"><button class="btn ghost sm" data-pick="">Dejar el día libre</button></div>`:''}
    `);
    return;
  }

  /* --- paso 2: comensales --- */
  const r = rec(dd.receta);
  const total = factorDia(k);
  abrirSheet(d.l, `
    <p class="price-hint" style="text-align:left;padding:0 4px 12px">Paso 2 de 2 · ¿Quién come?</p>

    <div class="card">
      <button class="day" data-paso="receta">
        <div class="thumb"><img src="img/${r.id}-sq.jpg" alt="" loading="lazy"></div>
        <div class="day-t"><strong>${esc(r.nombre)}</strong><span>Toca para cambiar la receta</span></div>
        <div class="chev"></div>
      </button>
    </div>

    <div class="sec"><h2>De casa</h2></div>
    <div class="card">
      ${S.personas.length ? S.personas.map(p=>{
        const on = dd.comensales.includes(p.id);
        return `<div class="item" data-comensal="${p.id}">
          <div class="check ${on?'':'off'}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5.5 5.5L20 6.5"/></svg></div>
          <div class="item-b">
            <div class="item-n">${esc(p.nombre)}</div>
            <div class="item-s">${esc(p.nota||'')}${p.nota?' · ':''}porción ×${p.factor}</div>
          </div>
        </div>`;
      }).join('') : `<div class="row"><div class="row-t"><span>No tienes personas dadas de alta. Agrégalas en Ajustes.</span></div></div>`}
    </div>

    ${dd.invitados.length ? `
      <div class="sec"><h2>Invitados de este día</h2></div>
      <div class="card">
        ${dd.invitados.map((g,ix)=>`
          <div class="row">
            <div class="row-t"><strong>${esc(g.nombre)}</strong><span>porción ×${g.factor}</span></div>
            <button class="act" data-quitainv="${ix}" style="color:var(--danger)">Quitar</button>
          </div>`).join('')}
      </div>` : ''}

    ${S.nuevoInvitado ? `
      <div class="sec"><h2>Nuevo invitado</h2></div>
      <div class="card">
        <div class="field">
          <label>Nombre</label>
          <input id="invNombre" type="text" placeholder="Ej. Mi mamá" value="${esc(S.nuevoInvitado.nombre)}" autocomplete="off">
        </div>
        <div class="row">
          <div class="row-t"><strong>Factor de consumo</strong><span>${textoFactor(S.nuevoInvitado.factor)}</span></div>
          <div class="stepper">
            <button data-invf="-1">−</button><span>${S.nuevoInvitado.factor.toFixed(1)}</span><button data-invf="1">+</button>
          </div>
        </div>
      </div>
      <div style="margin-top:12px;display:flex;gap:10px">
        <button class="btn ghost sm" id="invCancel">Cancelar</button>
        <button class="btn sm" id="invOk">Agregar invitado</button>
      </div>`
    : `<div style="margin-top:14px"><button class="btn ghost sm" id="invNuevo">+ Agregar invitado para este día</button></div>`}

    <div class="note" style="margin-top:18px">
      <b>${total.toFixed(1).replace('.0','')} porciones</b> para este día.
      ${total ? `Se cocina la receta ×${(total/r.porciones).toFixed(2).replace(/\.?0+$/,'')}.` : 'Marca al menos a una persona.'}
    </div>

    <div style="margin-top:16px"><button class="btn" id="diaListo">Listo</button></div>
  `);
}

const corto = n => n.length <= 8 ? n : n.replace(/^Persona\s+/i,'P').slice(0,8);

function textoFactor(f){
  if (f <= 0.6) return 'Porción de niño';
  if (f <  0.95) return 'Porción ligera';
  if (f <= 1.05) return 'Porción normal';
  if (f <= 1.35) return 'Porción grande';
  return 'Porción muy grande';
}

/* ============================================================
   Lista del mandado
   ============================================================ */
function generarLista(){
  const acc={};
  enPlan().forEach(r=>{
    const m=multDe(r);
    r.ingredientes.forEach(i=>{
      const u=unidadDe(i), k=i.n+'|'+u;
      if(!acc[k]) acc[k]={n:i.n,u,p:pasilloDe(i),c:0,de:[],unit:precioUnit(i)};
      acc[k].c += i.c*m;
      acc[k].unit = precioUnit(i);
      if(!acc[k].de.includes(r.nombre)) acc[k].de.push(r.nombre);
    });
  });
  const items=Object.values(acc).map(i=>({...i, precio:i.unit*i.c}));
  // Si ya ibas a medio súper, respetamos lo que llevas marcado
  const vigentes=new Set(items.map(i=>i.n+'|'+i.u));
  Object.keys(S.marcados).forEach(k=>{ if(!vigentes.has(k)) delete S.marcados[k]; });
  S.lista={
    grupos: PASILLOS.map(p=>({pasillo:p, items:items.filter(i=>i.p===p).sort((a,b)=>b.precio-a.precio)}))
                    .filter(g=>g.items.length),
    total: items.reduce((a,i)=>a+i.precio,0),
    n: items.length
  };
  renderMandado();
}

function renderMandado(){
  const w=$('#mandadoWrap');
  if(!S.lista){
    w.innerHTML=`<div class="empty"><div class="ico">🛒</div><b>Todavía no hay lista</b>
      <p>Ve a <strong>Plan</strong>, asigna una receta a cada día de la semana y toca «Generar lista del mandado».</p></div>`;
    $('#tabBadge').hidden=true; return;
  }
  const hechos=Object.keys(S.marcados).length, pend=S.lista.n-hechos;
  const pct=Math.min(100, S.lista.total/S.presupuesto*100), resta=S.presupuesto-S.lista.total;

  $('#tabBadge').hidden = pend===0;
  $('#tabBadge').textContent = pend;

  w.innerHTML=`
    <div class="budget">
      <div class="budget-top"><b>${mxn(S.lista.total)}</b><span>de ${mxn(S.presupuesto)}</span></div>
      <div class="bar"><i class="${S.lista.total>S.presupuesto?'over':''}" style="width:${pct}%"></i></div>
      <p class="budget-note">${resta>=0
        ? `Te sobran <strong>${mxn(resta)}</strong> del presupuesto · ${hechos} de ${S.lista.n} marcados`
        : `Te pasas por <strong>${mxn(-resta)}</strong> · ${hechos} de ${S.lista.n} marcados`}</p>
    </div>
    ${S.lista.grupos.map(g=>`
      <div class="aisle"><span>${esc(g.pasillo)}</span><span>${mxn(g.items.reduce((a,i)=>a+i.precio,0))}</span></div>
      <div class="card">
        ${g.items.map(i=>{
          const k=i.n+'|'+i.u;
          return `<div class="item ${S.marcados[k]?'done':''}">
            <div class="check" data-check="${esc(k)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5.5 5.5L20 6.5"/></svg></div>
            <div class="item-b" data-check="${esc(k)}">
              <div class="item-n">${esc(i.n)}</div>
              <div class="item-s">${fmtCant(i.c,i.u)} · ${i.de.length===1?esc(i.de[0]):'en '+i.de.length+' recetas'}</div>
            </div>
            <button class="item-p ${editado(i.n)?'edited':''}" data-precio="${esc(i.n)}">${mxn(i.precio)}</button>
          </div>`;
        }).join('')}
      </div>`).join('')}
    <p class="price-hint">Toca cualquier precio para actualizarlo si cambió en la tienda.</p>
    <div style="margin-top:14px"><button class="btn ghost sm" id="shareList">Compartir lista</button></div>`;
}

/* --- editor de precio: funciona para cualquier ingrediente de la maestra,
       esté o no en la lista de esta semana --- */
function editarPrecio(nombre, volverA){
  const m = maestra(nombre) || {};
  const u = m.unidad || 'g';
  const unit = precioUnit({ n:nombre, c:1, u });
  const prof = S.profeco[nombre];
  const fuente = fuentePrecio(nombre);

  // Si está en el mandado, editamos sobre la cantidad que vas a comprar;
  // si no, sobre una medida de referencia (1 kg, 1 L o 1 pieza).
  let cant = 0;
  if (S.lista) S.lista.grupos.forEach(g=>g.items.forEach(i=>{ if(i.n===nombre) cant=i.c; }));
  const enLista = cant > 0;
  if (!enLista) cant = u==='pz' ? 1 : 1000;

  abrirSheet(nombre, `
    <div class="card">
      <div class="field">
        <label>${enLista ? 'Cantidad que vas a comprar' : 'Cantidad de referencia'}</label>
        <input value="${fmtCant(cant,u)}" disabled style="color:var(--text-2)">
      </div>
      <div class="field">
        <label>Precio de esa cantidad (MXN)</label>
        <input id="precioInput" type="number" inputmode="decimal" step="0.5"
               value="${Math.round(unit*cant*100)/100}">
      </div>
      <div class="row">
        <div class="row-t"><strong>De dónde sale ahora</strong>
          <span>${ETIQUETA_FUENTE[fuente]}${m.pasillo?' · '+esc(m.pasillo):''}</span></div>
      </div>
    </div>

    ${prof ? `<div class="note" style="margin-top:14px">
        <b>PROFECO, ${esc(prof.fecha_observacion)}:</b> mediana de ${prof.observaciones}
        observaciones en ${prof.cadenas.length} cadenas. Más barato en
        <b>${esc(prof.mas_barato.cadena)}</b> a ${mxn(prof.mas_barato.precio_unidad*cant)}
        por esta cantidad.
      </div>`
    : `<div class="note" style="margin-top:14px">
        ${esc(m.nota || 'Sin fuente pública de precio')}. Este precio solo cambia si tú lo cambias.
      </div>`}

    <p class="price-hint" style="text-align:left;padding:10px 4px 0">
      Se guarda por unidad, así que se recalcula solo cuando cambien las porciones,
      los días o la gente que come.
    </p>
    <div style="margin-top:18px;display:flex;flex-direction:column;gap:10px">
      <button class="btn" data-savep="${esc(nombre)}" data-cant="${cant}"
              data-volver="${volverA||''}">Guardar precio</button>
      ${editado(nombre)?`<button class="btn ghost sm" data-resetp="${esc(nombre)}"
              data-volver="${volverA||''}">Volver al precio automático</button>`:''}
    </div>`);
}

/* --- todos los precios de la lista maestra, en una sola pantalla --- */
function pantallaPrecios(){
  const nombres = Object.keys(S.catalogo);
  if (!nombres.length){
    return abrirSheet('Precios', `<div class="empty"><div class="ico">🏷️</div>
      <b>Sin lista maestra</b><p>Sincroniza con GitHub para bajar el catálogo de ingredientes.</p></div>`);
  }
  const porPasillo = PASILLOS.map(p => ({
    pasillo: p,
    items: nombres.filter(n => (S.catalogo[n].pasillo||'Abarrotes') === p).sort((a,b)=>a.localeCompare(b,'es'))
  })).filter(g => g.items.length);

  const mios = nombres.filter(n=>editado(n)).length;
  const auto = nombres.filter(n=>S.profeco[n]).length;

  abrirSheet('Precios', `
    <div class="card">
      <div class="row"><div class="row-t"><strong>${nombres.length} ingredientes</strong>
        <span>${auto} con precio de PROFECO · ${mios} corregidos por ti</span></div></div>
      ${mios?`<button class="row" id="resetPrecios" style="width:100%;text-align:left">
        <div class="row-t"><strong style="color:var(--danger)">Borrar mis correcciones</strong>
        <span>Vuelve todo al precio automático</span></div></button>`:''}
    </div>
    ${porPasillo.map(g=>`
      <div class="aisle"><span>${esc(g.pasillo)}</span></div>
      <div class="card">
        ${g.items.map(n=>{
          const m=S.catalogo[n], u=m.unidad||'g';
          const unit=precioUnit({n,c:1,u});
          const ref = u==='pz' ? 1 : 1000;
          const etq = u==='pz' ? 'pieza' : (u==='ml' ? 'litro' : 'kilo');
          const fte = fuentePrecio(n);
          return `<button class="item" data-precio="${esc(n)}" data-volver="precios"
                          style="width:100%;text-align:left">
            <div class="item-b">
              <div class="item-n">${esc(n)}</div>
              <div class="item-s">${ETIQUETA_FUENTE[fte]}</div>
            </div>
            <span class="item-p ${fte==='tuyo'?'edited':''}">${mxn(unit*ref)} / ${etq}</span>
          </button>`;
        }).join('')}
      </div>`).join('')}
    <p class="price-hint" style="text-align:left;padding:12px 4px 0">
      Toca cualquiera para corregirlo. Los que dicen «PROFECO» se actualizan solos cada
      semana; los que dicen «estimado» no tienen fuente pública y dependen de ti.
    </p>`);
}

/* ============================================================
   Sheets
   ============================================================ */
function abrirSheet(t,html){
  $('#sheetTitle').textContent=t; $('#sheetBody').innerHTML=html;
  $('#sheet').classList.add('on'); $('#scrim').classList.add('on');
}
function cerrarSheet(){
  $('#sheet').classList.remove('on'); $('#scrim').classList.remove('on');
  S.diaEditando=null;
}

function verReceta(id){
  const r=rec(id), d=diasDe(id), m=d?multDe(r):1;
  const rp=reparto(r);
  const diasTxt = d
    ? DIAS.filter(x=>S.semana[x.k]===id).map(x=>x.l).join(', ')
    : null;

  abrirSheet(r.nombre, `
    <img class="hero-img" src="img/${r.id}-w.jpg" alt="">
    <div class="hero-t">
      <h4>${esc(r.nombre)}</h4>
      <div class="rmeta"><span>${r.tiempo} min</span><span>${r.categoria}</span><span>${mxn(costoRec(r,m))} en total</span></div>
    </div>

    <div class="macros">
      <div class="macro"><b>${r.kcal}</b><span>kcal</span></div>
      <div class="macro"><b>${r.proteina} g</b><span>Proteína</span></div>
      <div class="macro"><b>${d?porcionesDe(r).toFixed(1).replace('.0',''):r.porciones}</b><span>Porciones</span></div>
    </div>

    ${diasTxt?`<div class="note" style="margin-bottom:6px"><b>En tu semana:</b> ${esc(diasTxt)}</div>`:''}

    <div class="sec"><h2>Ingredientes</h2>${d?`<span class="act">escalado ×${m.toFixed(2).replace(/\.?0+$/,'')}</span>`:''}</div>
    <div class="card">
      ${r.ingredientes.map(i=>`<div class="row">
        <div class="row-t"><strong>${esc(i.n)}</strong><span>${esc(pasilloDe(i))}</span></div>
        <div style="text-align:right;flex:none">
          <div style="font-size:15px;font-weight:700">${fmtCant(i.c*m,unidadDe(i))}</div>
          <div style="font-size:12.5px;color:${editado(i.n)?'var(--accent)':'var(--text-2)'}">${mxn(precioIng(i,m))}</div>
        </div>
      </div>`).join('')}
    </div>

    ${rp.length ? (() => {
      const iguales = new Set(rp.map(firmaComensales)).size === 1;
      const bloques = iguales ? [rp[0]] : rp;
      return `
        <div class="sec"><h2>Reparto por lonche</h2><span class="act">báscula</span></div>
        ${bloques.map(b => `
          ${iguales ? '' : `<p class="price-hint" style="text-align:left;padding:2px 4px 6px"><strong>${esc(b.dia.l)}</strong></p>`}
          <div class="card" ${iguales?'':'style="margin-bottom:12px"'}>
            <table class="split">
              <thead><tr><th>Ingrediente</th>
                ${b.comensales.map(p=>`<th>${esc(corto(p.nombre))}</th>`).join('')}</tr></thead>
              <tbody>
                ${b.filas.map(fl=>`<tr><td>${esc(fl.n)}</td>
                  ${fl.por.map(v=>`<td>${fmtBascula(v,fl.u)}</td>`).join('')}</tr>`).join('')}
                <tr class="tot"><td>Proteína</td>
                  ${b.comensales.map(p=>`<td>${Math.round(r.proteina*p.factor)} g</td>`).join('')}</tr>
                <tr class="tot"><td>Calorías</td>
                  ${b.comensales.map(p=>`<td>${Math.round(r.kcal*p.factor)}</td>`).join('')}</tr>
              </tbody>
            </table>
          </div>`).join('')}
        <p class="price-hint" style="text-align:left;padding:9px 4px 0">
          Cantidades <strong>por lonche</strong>. ${iguales && rp.length>1
            ? `Los ${rp.length} días comen los mismos, así que pesa esto en cada táper.`
            : (rp.length>1 ? 'Cada día come gente distinta, por eso va una tabla por día.' : '')}
          Se omiten condimentos y cantidades muy chicas.
        </p>`;
    })() : `
      <div class="sec"><h2>Reparto por lonche</h2></div>
      <div class="note">Asigna esta receta a un día del plan y elige quién come, y aquí te digo cuántos gramos van en cada táper.</div>`}

    <div class="sec"><h2>Preparación</h2></div>
    <div class="card"><ol class="steps">${r.pasos.map(p=>`<li>${esc(p)}</li>`).join('')}</ol></div>

    <div class="sec"><h2>Notas del nutriólogo</h2></div>
    <div class="note">${esc(r.notas)}</div>

    <div style="margin-top:20px;display:flex;flex-direction:column;gap:10px">
      <button class="btn" data-addplan="${r.id}">${d?'Agregar otro día':'Agregar al plan'}</button>
      <button class="btn ghost sm" data-edit="${r.id}">Editar receta</button>
    </div>`);
}

function nuevaReceta(){
  abrirSheet('Nueva receta', `
    <div class="card">
      <div class="field"><label>Nombre</label><input placeholder="Ej. Wrap de pollo"></div>
      <div class="field"><label>Categoría</label>
        <select><option>Comida</option><option>Desayuno</option><option>Cena</option><option>Snack</option></select></div>
      <div class="field"><label>Porciones que rinde</label><input type="number" inputmode="numeric" value="2"></div>
      <div class="field"><label>Tiempo (min)</label><input type="number" inputmode="numeric" value="30"></div>
      <div class="field"><label>Foto</label><input type="file" accept="image/*" style="font-size:14px"></div>
    </div>
    <div class="sec"><h2>Nutrición por porción</h2></div>
    <div class="card">
      <div class="field"><label>Calorías</label><input type="number" inputmode="numeric" placeholder="480"></div>
      <div class="field"><label>Proteína (g)</label><input type="number" inputmode="numeric" placeholder="42"></div>
    </div>
    <div class="sec"><h2>Ingredientes</h2></div>
    <div class="card"><div class="field"><label>Uno por línea: nombre, cantidad, unidad, precio</label>
      <textarea placeholder="Pechuga de pollo, 700, g, 112&#10;Tortilla integral, 4, pz, 21&#10;Espinaca, 100, g, 25"></textarea></div></div>
    <div class="sec"><h2>Preparación</h2></div>
    <div class="card"><div class="field"><label>Un paso por línea</label>
      <textarea placeholder="Corta la pechuga en tiras&#10;Sazona con especias&#10;Cocina a fuego medio"></textarea></div></div>
    <div class="sec"><h2>Notas</h2></div>
    <div class="card"><div class="field"><label>Advertencias o ajustes</label>
      <textarea placeholder="Embarazo: cocción completa…"></textarea></div></div>
    <div class="note" style="margin-top:20px">
      <b>Todavía no está conectado.</b> Por ahora las recetas se agregan desde la
      computadora, donde se da de alta cada ingrediente nuevo en la lista maestra y
      se le consigue foto y precio. Esta pantalla es el diseño de cómo va a quedar.
    </div>
    <div style="margin-top:12px"><button class="btn" id="saveRecipe" disabled>Guardar y subir a GitHub</button></div>`);
}

/* ============================================================
   Ajustes
   ============================================================ */
function renderAjustes(){
  $('#setPeople').innerHTML = (S.personas.length ? S.personas.map((p,i)=>`
    <div class="field">
      <div style="display:flex;gap:10px;align-items:center;margin-bottom:6px">
        <input value="${esc(p.nombre)}" data-pname="${p.id}" placeholder="Nombre"
               style="flex:1;font-weight:600" autocomplete="off">
        <button class="act" data-borrap="${p.id}" style="color:var(--danger);flex:none">Quitar</button>
      </div>
      <div style="display:flex;gap:12px;align-items:center">
        <input value="${esc(p.nota||'')}" data-pnota="${p.id}" placeholder="Nota (embarazo, entrena…)"
               style="flex:1;font-size:14px;color:var(--text-2)" autocomplete="off">
        <div class="stepper">
          <button data-pf="-1" data-i="${p.id}">−</button>
          <span>${p.factor.toFixed(1)}</span>
          <button data-pf="1" data-i="${p.id}">+</button>
        </div>
      </div>
      <div style="font-size:12px;color:var(--text-3);margin-top:5px">${textoFactor(p.factor)}</div>
    </div>`).join('') : `<div class="row"><div class="row-t"><span>Todavía no hay personas. Agrega la primera abajo.</span></div></div>`)
    + `<button class="row" id="addPersona" style="width:100%;text-align:left">
         <div class="row-t"><strong style="color:var(--accent)">+ Agregar persona</strong>
         <span>Se podrá elegir en cualquier día de la semana</span></div>
       </button>`;

  const mios = Object.keys(S.precios).length;
  const auto = Object.keys(S.profeco).length;
  const tot  = Object.keys(S.catalogo).length;
  const meta = S.profecoMeta;
  const cuando = meta && meta.actualizado
    ? new Date(meta.actualizado).toLocaleDateString('es-MX',{day:'numeric',month:'long'})
    : null;

  $('#setPrecios').innerHTML = `
    <button class="row" id="abrirPrecios" style="width:100%;text-align:left">
      <div class="row-t"><strong>Ver y editar todos los precios</strong>
        <span>${tot ? `${tot} ingredientes · ${auto} de PROFECO${cuando?' al '+cuando:''}${mios?` · ${mios} tuyos`:''}`
                    : 'Sincroniza para bajar la lista maestra'}</span></div>
      <div class="chev"></div>
    </button>`;

  const est = {
    local:         ['Sin bajar',      'Todavía no se han cargado las recetas'],
    sincronizando: ['Buscando…',      'Bajando recetas y precios'],
    ok:            ['Al día',         'Última vez: ' + (S.sync.fecha ? new Date(S.sync.fecha).toLocaleString('es-MX') : '—')],
    error:         ['Sin conexión',   'Se están usando las recetas guardadas en este teléfono']
  }[S.sync.estado];
  const color = { ok:'var(--accent)', error:'var(--danger)' }[S.sync.estado] || 'var(--text-2)';
  $('#syncEstado').innerHTML = `
    <div class="row">
      <div class="row-t"><strong style="color:${color}">${est[0]}</strong><span>${esc(est[1])}</span></div>
    </div>`;


}

/* ============================================================
   Navegación
   ============================================================ */
const TITULOS = {
  recetas:['Cd. Juárez','Recetas'], plan:['Esta semana','Plan'],
  mandado:['Lista de compras','Mandado'], ajustes:['Preferencias','Ajustes']
};

function ir(v){
  S.vista=v;
  $$('.view').forEach(e=>e.classList.toggle('active', e.id==='v-'+v));
  $$('.tab').forEach(e=>e.classList.toggle('on', e.dataset.v===v));
  $('#eyebrow').textContent=TITULOS[v][0];
  $('#title').textContent=TITULOS[v][1];
  $('#hdrAction').hidden = v!=='recetas';
  $('#scroll').scrollTop=0;
  if(v==='plan')    renderPlan();
  if(v==='mandado') renderMandado();
  if(v==='ajustes') renderAjustes();
}

/* ============================================================
   Eventos
   ============================================================ */
document.addEventListener('click', e=>{
  const t=e.target;

  if(t.closest('#alertaCancel')) return cerrarAlerta();
  if(t.closest('#alertaOk')){ const fn=_alertaOk; cerrarAlerta(); if(fn) fn(); return; }

  const tab=t.closest('.tab');            if(tab) return ir(tab.dataset.v);
  const chip=t.closest('.chip');          if(chip){ S.filtro=chip.dataset.c; renderChips(); renderRecetas(); return; }
  const card=t.closest('.rcard');         if(card) return verReceta(card.dataset.r);
  if(t.closest('#hdrAction'))             return nuevaReceta();
  if(t.closest('#sheetClose')||t.closest('#scrim')) return cerrarSheet();

  // Día del calendario → selector
  const day=t.closest('[data-dia]');      if(day) return sheetDia(day.dataset.dia,'receta');

  // Elegir receta para el día
  const pick=t.closest('[data-pick]');
  if(pick){
    const k=S.diaEditando, id=pick.dataset.pick;
    if(!id){                                  // dejar el día libre
      S.semana[k]=null; cerrarSheet(); renderPlan(); renderRecetas();
      toast('Día libre'); return planCambio();
    }
    const previo = S.semana[k];
    S.semana[k] = {
      receta:id,
      // por defecto comen todos los de casa; si ya había elección, se respeta
      comensales: previo ? previo.comensales : S.personas.map(p=>p.id),
      invitados:  previo ? previo.invitados  : []
    };
    renderPlan(); renderRecetas();
    return sheetDia(k,'comensales');          // paso 2
  }

  // volver al paso de receta
  const paso=t.closest('[data-paso]');        if(paso) return sheetDia(S.diaEditando, paso.dataset.paso);

  // marcar / desmarcar a alguien de casa en ese día
  const cm=t.closest('[data-comensal]');
  if(cm){
    const d=S.semana[S.diaEditando], id=cm.dataset.comensal;
    const ix=d.comensales.indexOf(id);
    if(ix>=0) d.comensales.splice(ix,1); else d.comensales.push(id);
    sheetDia(S.diaEditando); renderPlan(); return planCambio();
  }

  // invitados del día
  if(t.closest('#invNuevo')){ S.nuevoInvitado={nombre:'',factor:1.0}; return sheetDia(S.diaEditando); }
  if(t.closest('#invCancel')){ S.nuevoInvitado=null; return sheetDia(S.diaEditando); }
  const invf=t.closest('[data-invf]');
  if(invf){
    S.nuevoInvitado.nombre = $('#invNombre').value;
    S.nuevoInvitado.factor = Math.min(2.5, Math.max(0.3,
      Math.round((S.nuevoInvitado.factor + Number(invf.dataset.invf)*0.1)*10)/10));
    return sheetDia(S.diaEditando);
  }
  if(t.closest('#invOk')){
    const nom=($('#invNombre').value||'').trim();
    if(!nom) return toast('Ponle nombre al invitado');
    S.semana[S.diaEditando].invitados.push({ nombre:nom, factor:S.nuevoInvitado.factor });
    S.nuevoInvitado=null;
    sheetDia(S.diaEditando); renderPlan();
    toast('Invitado agregado'); return planCambio();
  }
  const qi=t.closest('[data-quitainv]');
  if(qi){
    S.semana[S.diaEditando].invitados.splice(+qi.dataset.quitainv,1);
    sheetDia(S.diaEditando); renderPlan(); return planCambio();
  }
  if(t.closest('#diaListo')){
    const d=S.semana[S.diaEditando];
    if(d && factorDia(S.diaEditando)===0) return toast('Elige al menos una persona');
    cerrarSheet(); renderPlan(); renderRecetas(); return planCambio();
  }

  // Factor de porción (Ajustes)
  const pf=t.closest('[data-pf]');
  if(pf){
    const p=persona(pf.dataset.i);
    p.factor=Math.min(2.5,Math.max(0.3,Math.round((p.factor+Number(pf.dataset.pf)*0.1)*10)/10));
    renderAjustes(); return planCambio();
  }

  // Alta de persona
  if(t.closest('#addPersona')){
    S.personas.push({ id:nuevoId(), nombre:'Persona '+(S.personas.length+1), nota:'', factor:1.0 });
    renderAjustes(); return;
  }

  // Baja de persona: también sale de todos los días
  const bp=t.closest('[data-borrap]');
  if(bp){
    const id=bp.dataset.borrap, p=persona(id);
    confirmar('Quitar a '+p.nombre, 'Saldrá también de los días de la semana donde estaba comiendo.',
      'Quitar', ()=>{
        S.personas = S.personas.filter(x=>x.id!==id);
        DIAS.forEach(d=>{ const dd=S.semana[d.k];
          if(dd) dd.comensales = dd.comensales.filter(x=>x!==id); });
        renderAjustes(); renderPlan(); planCambio();
      }, { destructivo:true });
    return;
  }

  // Agregar al plan → primer día libre
  const ap=t.closest('[data-addplan]');
  if(ap){
    const libre=DIAS.find(d=>!S.semana[d.k]);
    if(!libre){ return toast('La semana ya está llena'); }
    S.semana[libre.k]={ receta:ap.dataset.addplan, comensales:S.personas.map(p=>p.id), invitados:[] };
    cerrarSheet(); renderRecetas();
    toast('Agregado el '+libre.l.toLowerCase());
    return planCambio();
  }

  // Precios
  const pe=t.closest('[data-precio]');    if(pe) return editarPrecio(pe.dataset.precio, pe.dataset.volver);
  const sp=t.closest('[data-savep]');
  if(sp){
    const v=Number($('#precioInput').value);
    const cant=Number(sp.dataset.cant);
    if(!(v>0)||!(cant>0)) return toast('Escribe un precio válido');
    S.precios[sp.dataset.savep]=v/cant;
    if(S.lista) generarLista();
    renderAjustes();
    if(sp.dataset.volver==='precios') pantallaPrecios(); else cerrarSheet();
    return toast('Precio actualizado');
  }
  const rp=t.closest('[data-resetp]');
  if(rp){
    delete S.precios[rp.dataset.resetp];
    if(S.lista) generarLista();
    renderAjustes();
    if(rp.dataset.volver==='precios') pantallaPrecios(); else cerrarSheet();
    return toast('Precio automático');
  }
  if(t.closest('#resetPrecios')){
    S.precios={}; renderAjustes(); if(S.lista) generarLista();
    pantallaPrecios(); return toast('Precios restaurados');
  }
  if(t.closest('#abrirPrecios')) return pantallaPrecios();

  if(t.closest('[data-edit]')) return toast('El editor llega en la próxima versión');
  if(t.closest('#saveRecipe')){
    return toast('El alta desde el teléfono aún no está conectada');
  }
  if(t.closest('#shareList'))  return compartirLista();
  if(t.closest('#btnSync'))    { sincronizar(); return; }

  if(t.closest('#genList')){ generarLista(); ir('mandado'); return; }
  if(t.closest('#clearWeek')){ DIAS.forEach(d=>S.semana[d.k]=null); renderPlan(); renderRecetas(); return planCambio(); }
  if(t.closest('#hoyPlan')) return ir('plan');

  // Marcar artículo
  const ck=t.closest('[data-check]');
  if(ck){
    const k=ck.dataset.check;
    const marcando = !S.marcados[k];
    if(S.marcados[k]) delete S.marcados[k]; else S.marcados[k]=true;
    renderMandado();
    if(marcando) revisarCompraTerminada();
    return;
  }

  const gsw=t.closest('#swDark');
  if(gsw){
    gsw.classList.toggle('on');
    if(gsw.id==='swDark') document.documentElement.dataset.theme = gsw.classList.contains('on')?'dark':'light';
    return;
  }
});

$('#q').addEventListener('input', e=>{ S.busqueda=e.target.value; renderRecetas(); });

// Nombre y nota de cada persona, sin volver a dibujar (para no perder el foco)
document.addEventListener('input', e=>{
  const n=e.target.dataset.pname, t=e.target.dataset.pnota;
  if(n){ persona(n).nombre = e.target.value; renderPlan(); }
  if(t){ persona(t).nota   = e.target.value; }
  if(e.target.id==='invNombre' && S.nuevoInvitado) S.nuevoInvitado.nombre = e.target.value;
});
$('#setBudget').addEventListener('input', e=>{
  S.presupuesto=Number(e.target.value)||0;
  if(S.vista==='mandado') renderMandado();
});

/* ============================================================
   Carga de datos: caché local primero, GitHub después
   ============================================================ */
function aplicarDatos(recetas, precios, catalogo){
  if (recetas && recetas.length) RECETAS = recetas;
  if (precios)  S.profeco  = precios;
  if (catalogo) S.catalogo = catalogo;
  renderChips(); renderRecetas();
  if (S.vista === 'plan')    renderPlan();
  if (S.vista === 'mandado' && S.lista) generarLista();
  if (S.vista === 'ajustes') renderAjustes();
}

/* Los datos viven junto a la app, en su propio sitio: cualquiera que abra el
   link los ve, sin token y sin configurar nada. El token quedó solo para
   escribir, que es lo único que de verdad necesita permiso. */
async function sincronizar({ silencioso = false } = {}){
  S.sync.estado = 'sincronizando';
  if (S.vista === 'ajustes') renderAjustes();

  const leer = async archivo => {
    const r = await fetch(`datos/${archivo}?t=${Date.now()}`, { cache:'no-store' });
    if (!r.ok) throw new Error(`${archivo}: ${r.status}`);
    return r.json();
  };

  try {
    const [r, p, c] = await Promise.allSettled([
      leer('recetas.json'), leer('precios.json'), leer('ingredientes.json')
    ]);

    let recetas = null, precios = null, catalogo = null;
    if (r.status === 'fulfilled'){
      recetas = r.value.recetas;
      S.sync.recetasDeGitHub = true;
      Cache.guardar('recetas', r.value);
    }
    if (p.status === 'fulfilled'){
      precios = p.value.precios;
      S.profecoMeta = p.value;
      Cache.guardar('precios', p.value);
    }
    if (c.status === 'fulfilled'){
      catalogo = c.value.ingredientes;
      Cache.guardar('catalogo', c.value);
    }
    if (r.status === 'rejected' && p.status === 'rejected' && c.status === 'rejected'){
      throw r.reason;
    }

    S.sync.estado = 'ok';
    S.sync.fecha  = new Date().toISOString();
    aplicarDatos(recetas, precios, catalogo);
    if (!silencioso) toast('Recetas al día');
  } catch (e){
    S.sync.estado = 'error';
    S.sync.error  = String(e.message || e);
    if (S.vista === 'ajustes') renderAjustes();
    if (!silencioso) toast('No se pudieron bajar las recetas');
    console.warn('[sync]', e);
  }
}

async function guardarRecetasEnGitHub(){
  if (!GH.listo) return toast('Configura GitHub en Ajustes');
  // Si nunca bajamos recetas.json, lo que hay en memoria son las recetas de
  // respaldo que vienen dentro de la app. Subirlas pisaría el repo con datos
  // viejos, así que mejor nos negamos.
  if (!S.sync.recetasDeGitHub){
    return toast('Sincroniza primero: aún no se han bajado tus recetas');
  }
  try {
    const actual = await GH.leer('recetas.json').catch(()=>({ sha:null }));
    await GH.escribir('recetas.json', { version:1, recetas:RECETAS },
                      'Recetas actualizadas desde el iPhone', actual.sha);
    toast('Guardado en tu repo');
  } catch(e){
    toast('No se pudo guardar');
    console.warn('[guardar]', e);
  }
}

/* ============================================================
   Persistencia local: el plan sobrevive a cerrar la app
   ============================================================ */
const LLAVE = 'plan_v1';
function persistir(){
  try {
    localStorage.setItem(LLAVE, JSON.stringify({
      personas: S.personas, semana: S.semana, precios: S.precios,
      presupuesto: S.presupuesto, lista: S.lista, marcados: S.marcados
    }));
  } catch {}
}
function recuperar(){
  try {
    const g = JSON.parse(localStorage.getItem(LLAVE) || 'null');
    if (!g) return;
    if (Array.isArray(g.personas) && g.personas.length) S.personas = g.personas;
    if (g.semana)      S.semana      = g.semana;
    if (g.precios)     S.precios     = g.precios;
    if (g.presupuesto) S.presupuesto = g.presupuesto;
    if (g.lista)       S.lista       = g.lista;
    if (g.marcados)    S.marcados    = g.marcados;
  } catch {}
}
setInterval(persistir, 3000);
addEventListener('pagehide', persistir);
addEventListener('visibilitychange', () => { if (document.hidden) persistir(); });

/* Las semanas guardadas antes traían solo el id de la receta */
function normalizarSemana(){
  DIAS.forEach(d=>{
    const v = S.semana[d.k];
    if (typeof v === 'string') {
      S.semana[d.k] = { receta:v, comensales:S.personas.map(p=>p.id), invitados:[] };
    } else if (v && typeof v === 'object') {
      v.comensales = (v.comensales||[]).filter(id => persona(id));
      v.invitados  = v.invitados || [];
    }
  });
}

/* Si todavía no hay lista maestra (nunca has sincronizado), la armamos con lo que
   traen las recetas incluidas. Así la pantalla de precios sirve desde el arranque. */
function catalogoDeRespaldo(){
  if (Object.keys(S.catalogo).length) return;
  const cat = {};
  RECETAS.forEach(r => r.ingredientes.forEach(i => {
    if (cat[i.n] || !i.u) return;
    cat[i.n] = { unidad:i.u, pasillo:i.p, precio_referencia: i.precio/i.c, profeco:null,
                 nota:'Estimado; sincroniza para traer el precio real' };
  }));
  S.catalogo = cat;
}

function arrancar(){
  recuperar();
  normalizarSemana();
  $('#setBudget').value = S.presupuesto;
  // 1. lo que haya en caché, para que abra al instante y sin internet
  const rc = Cache.leer('recetas'), pc = Cache.leer('precios'), cc = Cache.leer('catalogo');
  if (pc) S.profecoMeta = pc;
  aplicarDatos(rc && rc.recetas, pc && pc.precios, cc && cc.ingredientes);
  catalogoDeRespaldo();
  ir('recetas');

  // 2. y de fondo, lo último publicado (no hace falta token para leer)
  sincronizar({ silencioso:true });
}

arrancar();
