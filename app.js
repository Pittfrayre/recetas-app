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
    { nombre:'Persona 1', nota:'Embarazo',       factor:1.0, on:true },
    { nombre:'Persona 2', nota:'Entrenamiento',  factor:1.3, on:true }
  ],
  semana:{ lun:'wrap-pollo', mar:'bowl-carne', mie:'wrap-pollo',
           jue:'bowl-carne', vie:'tilapia-horno', sab:null, dom:null },
  precios:{},        // { ingrediente: precio por unidad }  ← lo que tú corriges a mano
  profeco:{},        // { ingrediente: {precio_unidad, mas_barato, ...} } ← robot semanal
  sync:{ estado:'local', fecha:null, sha:null },
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
// Prioridad: lo que tú corregiste  >  PROFECO de esta semana  >  el precio de referencia
const precioUnit = i =>
  S.precios[i.n] !== undefined ? S.precios[i.n]
  : (S.profeco[i.n] ? S.profeco[i.n].precio_unidad : i.precio / i.c);
const fuentePrecio = n =>
  S.precios[n] !== undefined ? 'tuyo' : (S.profeco[n] ? 'profeco' : 'referencia');
const precioIng  = (i,m=1) => precioUnit(i) * i.c * m;
const editado    = n => S.precios[n] !== undefined;

/* --- plan semanal --- */
const activas    = () => S.personas.filter(p => p.on);
const factorTotal= () => activas().reduce((a,p)=>a+p.factor,0);
const diasDe     = id => DIAS.filter(d => S.semana[d.k] === id).length;
const diasTotal  = () => DIAS.filter(d => S.semana[d.k]).length;
const enPlan     = () => RECETAS.filter(r => diasDe(r.id) > 0);
const multDe     = r => (diasDe(r.id) * factorTotal()) / r.porciones;
const costoRec   = (r,m=1) => r.ingredientes.reduce((a,i)=>a+precioIng(i,m),0);

/* --- reparto por persona, por lonche --- */
function reparto(r){
  const d  = diasDe(r.id) || 1;
  const on = activas();
  const sf = on.reduce((a,p)=>a+p.factor,0);
  const m  = (d*sf)/r.porciones;
  return {
    dias:d, personas:on, mult:m,
    filas: r.ingredientes.map(i => ({
      n:i.n, u:i.u, total:i.c*m,
      por: on.map(p => i.c*m*p.factor/(d*sf))
    // Solo lo que vale la pena pesar: nada de "0.1 pz de cebolla"
    })).filter(f => Math.max(...f.por) >= (f.u==='pz' ? 0.5 : 10))
  };
}

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
  const ft    = factorTotal();
  const dias  = diasTotal();
  const recs  = enPlan();
  const costo = recs.reduce((a,r)=>a+costoRec(r,multDe(r)),0);
  const prot  = dias ? recs.reduce((a,r)=>a+r.proteina*diasDe(r.id),0)/dias : 0;
  const hoy   = (new Date().getDay()+6)%7;   // 0 = lunes

  $('#planSummary').innerHTML = `
    <div class="big">${dias} ${dias===1?'comida':'comidas'}</div>
    <div class="lbl">${activas().length} personas · ${(dias*ft).toFixed(1).replace('.0','')} porciones en total</div>
    <div class="sgrid">
      <div><b>${mxn(costo)}</b><span>Costo</span></div>
      <div><b>${Math.round(prot)} g</b><span>Proteína</span></div>
      <div><b>${recs.length}</b><span>Recetas</span></div>
    </div>`;

  $('#semana').innerHTML = DIAS.map((d,ix) => {
    const r = rec(S.semana[d.k]);
    return `<button class="day ${ix===hoy?'today':''}" data-dia="${d.k}">
      <div class="day-n"><b>${d.n}</b><span>${ix===hoy?'hoy':''}</span></div>
      ${r ? `<div class="thumb"><img src="img/${r.id}-sq.jpg" alt="" loading="lazy"></div>`
          : `<div class="dash">+</div>`}
      <div class="day-t ${r?'':'off'}">
        <strong>${r?esc(r.nombre):'Sin asignar'}</strong>
        <span>${r?`${r.proteina} g proteína · ${ft.toFixed(1).replace('.0','')} porciones`:'Toca para elegir receta'}</span>
      </div>
      <div class="chev"></div>
    </button>`;
  }).join('');

  $('#people').innerHTML = S.personas.map((p,i)=>`
    <div class="row">
      <div class="row-t"><strong>${esc(p.nombre)}</strong><span>${esc(p.nota)} · porción ×${p.factor}</span></div>
      <div class="sw ${p.on?'on':''}" data-per="${i}"></div>
    </div>`).join('');

  $('#genList').disabled = dias === 0;
}

/* --- selector de receta para un día --- */
function pickerDia(k){
  S.diaEditando = k;
  const d = DIAS.find(x=>x.k===k);
  const actual = S.semana[k];
  abrirSheet(d.l, `
    <div class="card">
      ${RECETAS.map(r=>`
        <button class="day" data-pick="${r.id}">
          <div class="thumb"><img src="img/${r.id}-sq.jpg" alt="" loading="lazy"></div>
          <div class="day-t">
            <strong>${esc(r.nombre)}</strong>
            <span>${r.tiempo} min · ${r.proteina} g proteína · ${mxn(costoRec(r)/r.porciones)}/porción</span>
          </div>
          ${actual===r.id?`<span class="tag p">Elegida</span>`:`<div class="chev"></div>`}
        </button>`).join('')}
    </div>
    ${actual?`<div style="margin-top:16px"><button class="btn ghost sm" data-pick="">Dejar el día libre</button></div>`:''}
  `);
}

/* ============================================================
   Lista del mandado
   ============================================================ */
function generarLista(){
  const acc={};
  enPlan().forEach(r=>{
    const m=multDe(r);
    r.ingredientes.forEach(i=>{
      const k=i.n+'|'+i.u;
      if(!acc[k]) acc[k]={n:i.n,u:i.u,p:i.p,c:0,de:[],unit:precioUnit(i)};
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

/* --- editor de precio --- */
function editarPrecio(nombre){
  let ref=null, cant=0;
  for(const r of RECETAS) for(const i of r.ingredientes) if(i.n===nombre){ ref=i; break; }
  S.lista.grupos.forEach(g=>g.items.forEach(i=>{ if(i.n===nombre) cant=i.c; }));
  const unit=precioUnit(ref), actual=unit*cant, prof=S.profeco[nombre];

  abrirSheet(nombre, `
    <div class="card">
      <div class="field">
        <label>Cantidad que vas a comprar</label>
        <input value="${fmtCant(cant,ref.u)}" disabled style="color:var(--text-2)">
      </div>
      <div class="field">
        <label>Precio total de esa cantidad (MXN)</label>
        <input id="precioInput" type="number" inputmode="decimal" step="0.5" value="${Math.round(actual)}">
      </div>
    </div>
    ${prof ? `<div class="note" style="margin-top:14px">
        <b>PROFECO, ${esc(prof.fecha_observacion)}:</b> mediana de ${prof.observaciones} observaciones
        en ${prof.cadenas.length} cadenas. Más barato en <b>${esc(prof.mas_barato.cadena)}</b>
        a ${mxn(prof.mas_barato.precio_unidad*cant)} por esta cantidad.
      </div>` : ``}
    <p class="price-hint" style="text-align:left;padding:10px 4px 0">
      Equivale a ${mxn(unit*(ref.u==='pz'?1:100))} por ${ref.u==='pz'?'pieza':'100 '+ref.u}.
      El precio se guarda por unidad, así que se ajusta solo cuando cambies las porciones o los días.
    </p>
    <div style="margin-top:18px;display:flex;flex-direction:column;gap:10px">
      <button class="btn" data-savep="${esc(nombre)}" data-cant="${cant}">Guardar precio</button>
      ${editado(nombre)?`<button class="btn ghost sm" data-resetp="${esc(nombre)}">Volver al precio original</button>`:''}
    </div>`);
}

function compartirLista(){
  if(!S.lista) return;
  const txt = ['Mandado — ' + mxn(S.lista.total), '']
    .concat(S.lista.grupos.flatMap(g =>
      ['· ' + g.pasillo].concat(g.items.map(i => `   ${i.n} — ${fmtCant(i.c,i.u)} (${mxn(i.precio)})`))
    )).join('\n');
  if(navigator.share) navigator.share({ title:'Lista del mandado', text:txt }).catch(()=>{});
  else if(navigator.clipboard) navigator.clipboard.writeText(txt).then(()=>toast('Copiada al portapapeles'));
  else toast('Tu navegador no permite compartir');
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
      <div class="macro"><b>${d?(d*factorTotal()).toFixed(1).replace('.0',''):r.porciones}</b><span>Porciones</span></div>
    </div>

    ${diasTxt?`<div class="note" style="margin-bottom:6px"><b>En tu semana:</b> ${esc(diasTxt)}</div>`:''}

    <div class="sec"><h2>Ingredientes</h2>${d?`<span class="act">escalado ×${m.toFixed(2).replace(/\.?0+$/,'')}</span>`:''}</div>
    <div class="card">
      ${r.ingredientes.map(i=>`<div class="row">
        <div class="row-t"><strong>${esc(i.n)}</strong><span>${esc(i.p)}</span></div>
        <div style="text-align:right;flex:none">
          <div style="font-size:15px;font-weight:700">${fmtCant(i.c*m,i.u)}</div>
          <div style="font-size:12.5px;color:${editado(i.n)?'var(--accent)':'var(--text-2)'}">${mxn(precioIng(i,m))}</div>
        </div>
      </div>`).join('')}
    </div>

    <div class="sec"><h2>Reparto por lonche</h2><span class="act">báscula</span></div>
    <div class="card">
      <table class="split">
        <thead><tr><th>Ingrediente</th>${rp.personas.map(p=>`<th>${esc(p.nombre.replace('Persona ','P'))}</th>`).join('')}</tr></thead>
        <tbody>
          ${rp.filas.map(f=>`<tr>
            <td>${esc(f.n)}</td>
            ${f.por.map(v=>`<td>${fmtBascula(v,f.u)}</td>`).join('')}
          </tr>`).join('')}
          <tr class="tot"><td>Proteína</td>
            ${rp.personas.map(p=>`<td>${Math.round(r.proteina*p.factor)} g</td>`).join('')}</tr>
          <tr class="tot"><td>Calorías</td>
            ${rp.personas.map(p=>`<td>${Math.round(r.kcal*p.factor)}</td>`).join('')}</tr>
        </tbody>
      </table>
    </div>
    <p class="price-hint" style="text-align:left;padding:9px 4px 0">
      Cantidades <strong>por lonche</strong>, ya divididas entre ${rp.personas.map(p=>`${esc(p.nombre)} (×${p.factor})`).join(' y ')}.
      ${rp.dias>1?`La receta rinde para ${rp.dias} días, así que pesa esto mismo en cada táper.`:''}
      Se omiten condimentos y cantidades muy chicas.
    </p>

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
    <div style="margin-top:20px"><button class="btn" id="saveRecipe">Guardar y subir a GitHub</button></div>`);
}

/* ============================================================
   Ajustes
   ============================================================ */
function renderAjustes(){
  $('#setPeople').innerHTML = S.personas.map((p,i)=>`
    <div class="field">
      <label>${esc(p.nota)}</label>
      <div style="display:flex;gap:12px;align-items:center">
        <input value="${esc(p.nombre)}" data-pname="${i}" style="flex:1">
        <div class="stepper">
          <button data-pf="-1" data-i="${i}">−</button>
          <span>${p.factor.toFixed(1)}</span>
          <button data-pf="1" data-i="${i}">+</button>
        </div>
      </div>
    </div>`).join('');

  const n  = Object.keys(S.precios).length;
  const np = Object.keys(S.profeco).length;
  const meta = S.profecoMeta;
  const cuando = meta && meta.actualizado
    ? new Date(meta.actualizado).toLocaleDateString('es-MX',{day:'numeric',month:'long'})
    : null;

  $('#setPrecios').innerHTML = `
    <div class="row">
      <div class="row-t"><strong>Precios de PROFECO</strong>
        <span>${np ? `${np} ingredientes · ${esc(meta.ciudad||'')}${cuando?' · '+cuando:''}`
                   : 'Aún sin descargar — sincroniza abajo'}</span></div>
    </div>
    <div class="row">
      <div class="row-t"><strong>Corregidos por ti</strong>
        <span>${n ? n+' ingrediente'+(n>1?'s':'')+' con tu precio' : 'Ninguno'}</span></div>
      ${n?`<button class="act" id="resetPrecios" style="color:var(--danger);font-weight:600">Borrar</button>`:''}
    </div>`;

  const est = {
    local:         ['Sin conectar',   'Pega tu repo y token abajo'],
    sincronizando: ['Sincronizando…', 'Bajando recetas y precios'],
    ok:            ['Al día',         'Última vez: ' + (S.sync.fecha ? new Date(S.sync.fecha).toLocaleString('es-MX') : '—')],
    error:         ['Falló',          S.sync.error || 'Revisa el token y el nombre del repo']
  }[S.sync.estado];
  const color = { ok:'var(--accent)', error:'var(--danger)' }[S.sync.estado] || 'var(--text-2)';
  $('#syncEstado').innerHTML = `
    <div class="row">
      <div class="row-t"><strong style="color:${color}">${est[0]}</strong><span>${esc(est[1])}</span></div>
    </div>`;

  const c = GH.cfg;
  if ($('#setRepo')  && !$('#setRepo').value)  $('#setRepo').value  = c.repo;
  if ($('#setToken') && c.token && !$('#setToken').value) $('#setToken').value = '••••••••••••';
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
  const day=t.closest('[data-dia]');      if(day) return pickerDia(day.dataset.dia);

  // Elegir receta para el día
  const pick=t.closest('[data-pick]');
  if(pick){
    S.semana[S.diaEditando] = pick.dataset.pick || null;
    cerrarSheet(); renderPlan(); renderRecetas();
    toast(pick.dataset.pick ? 'Asignado' : 'Día libre');
    return planCambio();
  }

  // Personas (Plan)
  const sw=t.closest('[data-per]');
  if(sw){
    const p=S.personas[+sw.dataset.per];
    if(activas().length===1 && p.on) return toast('Deja al menos una persona');
    p.on=!p.on; renderPlan(); return planCambio();
  }

  // Factor (Ajustes)
  const pf=t.closest('[data-pf]');
  if(pf){
    const p=S.personas[+pf.dataset.i];
    p.factor=Math.min(2.5,Math.max(0.5,Math.round((p.factor+Number(pf.dataset.pf)*0.1)*10)/10));
    renderAjustes(); return planCambio();
  }

  // Agregar al plan → primer día libre
  const ap=t.closest('[data-addplan]');
  if(ap){
    const libre=DIAS.find(d=>!S.semana[d.k]);
    if(!libre){ return toast('La semana ya está llena'); }
    S.semana[libre.k]=ap.dataset.addplan;
    cerrarSheet(); renderRecetas();
    toast('Agregado el '+libre.l.toLowerCase());
    return planCambio();
  }

  // Precios
  const pe=t.closest('[data-precio]');    if(pe) return editarPrecio(pe.dataset.precio);
  const sp=t.closest('[data-savep]');
  if(sp){
    const v=Number($('#precioInput').value);
    const cant=Number(sp.dataset.cant);
    if(!(v>0)||!(cant>0)) return toast('Escribe un precio válido');
    S.precios[sp.dataset.savep]=v/cant;
    cerrarSheet(); generarLista(); return toast('Precio actualizado');
  }
  const rp=t.closest('[data-resetp]');
  if(rp){ delete S.precios[rp.dataset.resetp]; cerrarSheet(); generarLista(); return toast('Precio original'); }
  if(t.closest('#resetPrecios')){ S.precios={}; renderAjustes(); if(S.lista) generarLista(); return toast('Precios restaurados'); }

  if(t.closest('[data-edit]')) return toast('El editor llega en la próxima versión');
  if(t.closest('#saveRecipe')){ cerrarSheet(); guardarRecetasEnGitHub(); return; }
  if(t.closest('#shareList'))  return compartirLista();
  if(t.closest('#btnSync'))    { sincronizar(); return; }
  if(t.closest('#btnGuardarGH')){
    const repo = $('#setRepo').value.trim();
    const tok  = $('#setToken').value.trim();
    if(!repo.includes('/')) return toast('El repo va como usuario/repositorio');
    GH.set(repo, tok.startsWith('•') ? '' : tok);
    renderAjustes(); sincronizar(); return;
  }

  if(t.closest('#genList')){ generarLista(); ir('mandado'); return; }
  if(t.closest('#clearWeek')){ DIAS.forEach(d=>S.semana[d.k]=null); renderPlan(); renderRecetas(); return planCambio(); }

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

  const gsw=t.closest('#swAuto, #swDark');
  if(gsw){
    gsw.classList.toggle('on');
    if(gsw.id==='swDark') document.documentElement.dataset.theme = gsw.classList.contains('on')?'dark':'light';
    return;
  }
});

$('#q').addEventListener('input', e=>{ S.busqueda=e.target.value; renderRecetas(); });
$('#setBudget').addEventListener('input', e=>{
  S.presupuesto=Number(e.target.value)||0;
  if(S.vista==='mandado') renderMandado();
});

/* ============================================================
   Carga de datos: caché local primero, GitHub después
   ============================================================ */
function aplicarDatos(recetas, precios){
  if (recetas && recetas.length) RECETAS = recetas;
  if (precios) S.profeco = precios;
  renderChips(); renderRecetas();
  if (S.vista === 'plan')    renderPlan();
  if (S.vista === 'mandado' && S.lista) generarLista();
  if (S.vista === 'ajustes') renderAjustes();
}

async function sincronizar({ silencioso = false } = {}){
  if (!GH.listo){
    if (!silencioso) toast('Falta el repo o el token en Ajustes');
    return;
  }
  S.sync.estado = 'sincronizando';
  if (S.vista === 'ajustes') renderAjustes();

  try {
    const [r, p] = await Promise.allSettled([ GH.leer('recetas.json'), GH.leer('precios.json') ]);

    let recetas = null, precios = null;
    if (r.status === 'fulfilled'){
      recetas = r.value.datos.recetas;
      S.sync.sha = r.value.sha;
      Cache.guardar('recetas', r.value.datos);
    }
    if (p.status === 'fulfilled'){
      precios = p.value.datos.precios;
      S.profecoMeta = p.value.datos;
      Cache.guardar('precios', p.value.datos);
    }
    if (r.status === 'rejected' && p.status === 'rejected') throw r.reason;

    S.sync.estado = 'ok';
    S.sync.fecha  = new Date().toISOString();
    aplicarDatos(recetas, precios);
    if (!silencioso) toast('Actualizado desde GitHub');
  } catch (e){
    S.sync.estado = 'error';
    S.sync.error  = String(e.message || e);
    if (S.vista === 'ajustes') renderAjustes();
    if (!silencioso) toast('No se pudo sincronizar');
    console.warn('[sync]', e);
  }
}

async function guardarRecetasEnGitHub(){
  if (!GH.listo) return toast('Configura GitHub en Ajustes');
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

function arrancar(){
  // 1. lo que haya en caché, para que abra al instante y sin internet
  const rc = Cache.leer('recetas'), pc = Cache.leer('precios');
  if (pc) S.profecoMeta = pc;
  aplicarDatos(rc && rc.recetas, pc && pc.precios);
  ir('recetas');

  // 2. y de fondo, lo último de GitHub
  if (GH.listo) sincronizar({ silencioso:true });
}

arrancar();
