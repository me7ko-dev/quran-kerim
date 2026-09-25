// Service worker: приложението се отваря и без интернет.
// Кодът — първо от мрежата (за да идват обновленията), текстът на Корана — от кеша.
const SHELL = 'qk-shell-v2';
const DATA = 'qk-data-v1';
const SHELL_FILES = ['./', 'index.html', 'css/style.css', 'js/app.js', 'js/store.js', 'js/audio.js', 'js/prayer.js', 'js/qibla.js', 'fonts/UthmanicHafs.woff2', 'data/meta.json', 'data/prayer.json', 'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(SHELL_FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== SHELL && k !== DATA).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  // Google шрифтове — от кеша, ако ги има
  if (url.host === 'fonts.googleapis.com' || url.host === 'fonts.gstatic.com') {
    e.respondWith(caches.open(SHELL).then(async c => (await c.match(e.request)) || fetch(e.request).then(r => { c.put(e.request, r.clone()); return r; })));
    return;
  }
  if (url.origin !== location.origin) return; // аудиото минава направо
  // Текстът на сурите и населените места не се променят — кеш първо
  if (/\/data\/(s\/\d+|places)\.json$/.test(url.pathname) || url.pathname.endsWith('.woff2')) {
    e.respondWith(caches.open(DATA).then(async c => (await c.match(e.request)) || fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; })));
    return;
  }
  // Всичко останало (код, времена за намаз) — мрежа първо, кеш при липса на връзка
  e.respondWith(fetch(e.request).then(r => {
    if (r.ok) { const cl = r.clone(); caches.open(SHELL).then(c => c.put(e.request, cl)); }
    return r;
  }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('index.html'))));
});
