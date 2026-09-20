/* Service worker: la app abre aunque no haya internet. */
const VERSION = 'recetas-v9';
const CONCHA = [
  './', './index.html', './styles.css?v=9', './app.js?v=9', './github.js?v=9',
  './manifest.webmanifest',
  './datos/recetas.json', './datos/precios.json', './datos/ingredientes.json',
  './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png',
  './img/wrap-pollo-sq.jpg',     './img/wrap-pollo-w.jpg',
  './img/bowl-carne-sq.jpg',     './img/bowl-carne-w.jpg',
  './img/tilapia-horno-sq.jpg',  './img/tilapia-horno-w.jpg',
  './img/atun-sellado-sq.jpg',   './img/atun-sellado-w.jpg',
  './img/ensalada-pollo-sq.jpg', './img/ensalada-pollo-w.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSION)
      .then(c => Promise.allSettled(CONCHA.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (url.hostname === 'api.github.com') return;   // los datos siempre frescos

  // La app: red primero, caché si no hay señal
  e.respondWith(
    fetch(e.request)
      .then(r => {
        if (r.ok && url.origin === location.origin){
          const copia = r.clone();
          caches.open(VERSION).then(c => c.put(e.request, copia));
        }
        return r;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
