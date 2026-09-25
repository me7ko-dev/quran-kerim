// Service worker: приложението се отваря и без интернет.
// Кодът — първо от мрежата (за да идват обновленията), текстът на Корана и шрифтът — от кеша.
// Увеличи SHELL при промяна в кода, ако кешът пречи; DATA — само ако се поправи текст в data/s/, data/tr/ или places.json.
const SHELL = 'qk-shell-v6';
const DATA = 'qk-data-v1';
const SHELL_FILES = ['./', 'index.html', 'css/style.css', 'js/app.js', 'js/store.js', 'js/audio.js', 'js/prayer.js', 'js/qibla.js', 'data/meta.json', 'data/prayer.json', 'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png'];

self.addEventListener('install', e => {
  e.waitUntil(Promise.all([
    caches.open(SHELL).then(c => c.addAll(SHELL_FILES.map(u => new Request(u, { cache: 'reload' })))), // покрай HTTP кеша — без остарели файлове
    // шрифтовете не се менят — стоят при текста
    caches.open(DATA).then(c => c.addAll(['UthmanicHafs', 'manrope-cyrillic', 'manrope-latin', 'manrope-latin-ext', 'cormorant-cyrillic', 'cormorant-latin', 'cormorant-latin-ext'].map(f => `fonts/${f}.woff2`))),
  ]).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== SHELL && k !== DATA).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

// Първо от кеша (който и да е), иначе от мрежата и в кеша
const cacheFirst = (req, name, keep) => caches.match(req).then(hit => hit || fetch(req).then(r => {
  if (keep(r)) { const cl = r.clone(); caches.open(name).then(c => c.put(req, cl)); }
  return r;
}));

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET') return;
  if (url.origin !== location.origin) return; // аудиото минава направо
  // Текстът на сурите, населените места и шрифтът не се променят
  if (/\/data\/(s\/\d+|tr\/\d+|places)\.json$/.test(url.pathname) || url.pathname.endsWith('.woff2')) {
    e.respondWith(cacheFirst(req, DATA, r => r.ok));
    return;
  }
  // Всичко останало — мрежа първо, кешът при липса на връзка. Страницата и времената за намаз
  // не чакат бавна мрежа над 4 сек; модулите (JS/CSS) — да, за да не се смеси стар и нов код.
  e.respondWith((async () => {
    const net = fetch(req).then(r => {
      if (r.ok) { const cl = r.clone(); caches.open(SHELL).then(c => c.put(req, cl)); }
      return r;
    });
    const cached = () => caches.match(req, { ignoreSearch: true });
    const quick = req.mode === 'navigate' || url.pathname.endsWith('/data/prayer.json');
    const slow = quick && new Promise(res => setTimeout(res, 4000)).then(async () => (await cached()) || net);
    if (slow) slow.catch(() => {}); // грешката на мрежата се обработва по-долу
    try { return await (slow ? Promise.race([net, slow]) : net); }
    catch (err) {
      const hit = await cached();
      if (hit) return hit;
      if (req.mode === 'navigate') return (await caches.match('index.html')) || Response.error();
      return Response.error();
    }
  })());
});
