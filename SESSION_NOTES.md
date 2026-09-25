# Бележки от сесиите (обновено 2026-09-25, втора сесия)

> Прочети това вместо да преглеждаш репото наново. Докъде сме стигнали и какво следва: [NEXT_SESSION.md](NEXT_SESSION.md).

**На живо:** https://me7ko-dev.github.io/quran-kerim/ · репо `me7ko-dev/quran-kerim` · папка `~/Projects/quran-kerim`
Статичен сайт (без build). Push в `main` → Pages се обновява за ~1 мин.

## Устройство
- `js/app.js` — рутер (`#/`, `#/s/2/255`, `#/prayer`, `#/prayer/<място>`, `#/qibla`, `#/bookmarks`, `#/settings`, `#/search/<дума>`) и всички екрани.
- `js/audio.js` — списък рецитатори (папки на everyayah.com) + плейър (един `<audio>` заради iPhone; режими single/continue/repeat/range).
  `range` = заучаване: `playRange(s, from, to, each, loops)`, loops 0 = без край; не се пази в `play`, само `hifz: {each, loops}`.
- `js/qibla.js` — посока по голям кръг, магнитно отклонение (линейна формула по NOAA WMM за 2026–2029, грешка < 0.06°), час „слънцето сочи киблата“, компас (iPhone: `webkitCompassHeading` + разрешение; Android: `deviceorientationabsolute`).
  Разрешение се иска само ако няма `ondeviceorientationabsolute` — Chrome/Edge 153+ също имат `requestPermission`.
- `js/intro.js` + `css/intro.css` + маркировка в `index.html` — начален екран „златният мусхаф“ (CSS 3D, без библиотеки).
  `<head>` слага `html.intro-on` само ако `intro !== false` и адресът е началото (директни връзки не се бавят).
  „Бисмиллях“ пуска 1:1 от избрания рецитатор; корицата се отваря НАДЯСНО (гръбчето на мусхафа е вдясно);
  Орнаментите (корица, гръбче, ебру, илюминация) са SVG, генерирани от `node tools/build-intro.mjs` между маркерите <!--intro:X--> в index.html —
  не ги пипай на ръка. Без кръстовидни форми по корицата (проверено).
  страницата показва Фатиха от `data/s/1.json`, текстът на бутона е точно 1:1 (тестът го сверява). Тестовете слагат `intro: false`.
- `js/prayer.js` — времена за намаз; `js/store.js` — настройки в localStorage (`qk:v1`).
- `data/s/<n>.json` — `[арабски QPC Hafs, превод Теофанов, страница, джуз]` за всеки айет; `data/meta.json` — сури (имена на български) и джузове.
- Само български превод (Теофанов). Турският (Диянет) беше добавен и махнат на 25.09.2026: старото издание (Tanzil/quran.com)
  повтаряше един и същ текст в 843 айета (Диянет превежда някои поредни айети с едно изречение). Ако се върне — само
  официалния мял от kuran.diyanet.gov.tr, с обединените айети показани веднъж (напр. 1:2–4).
- `data/prayer.json` — `base` (365 реда за София, зимно време UTC+2) + `towns` (48 града с `shift` в минути).
- `data/places.json` — 6 911 населени места от OSM: `[име, 0 град/1 село/2 махала, lat, lon, област, община]`.
- Шрифтове: всички са в `fonts/` (Manrope, Cormorant Garamond — поднабори latin/latin-ext/cyrillic от @fontsource-variable; лиценз `fonts/OFL.txt`). Без Google Fonts.
- `sw.js` — офлайн. Код: мрежа първо, кеш при липса на връзка или „висяща“ мрежа (страница и prayer.json след 4 сек, JS/CSS след 10 сек), `qk-shell-vN`. Текст/шрифт: кеш първо в `qk-data-v1` —
  увеличи го САМО при поправка на текст в `data/s/` или `places.json` (всички потребители ще изтеглят наново ~4 MB).

## Важни факти за времената (проверени)
- Календарът на Мюфтийството = София + постоянна разлика за всеки град (всички 48 × 365 дни). Разликата ≈ 4 мин × (23.32 − дължина).
- Мюфтийството НЕ отчита географската ширина (напр. Силистра е само −16 мин от София през цялата година).
- Таблицата 2025 = 2026 (проверено в Wayback); 2024 е била различна → затова има месечен GitHub Action.
- Село: най-близкият официален град + round(4 × Δдължина). Настройка „Точно време за селото“ го изключва.

## Инструменти (`tools/`)
- `update-prayer.mjs` — сваля от grandmufti.bg (POST month/town), открива DST скоковете в таблицата, пише prayer.json.
  Пуска се от `.github/workflows/update-prayer.yml` (2-ро число, 04:17 UTC, и ръчно); пише `changed=true/false` в `$GITHUB_OUTPUT`.
- `check-reciters.mjs` — HEAD на случайни айети за всеки рецитатор (последно: всичките 25 OK).
- `cdp-shot.mjs` — снимка с емулация на телефон през Edge DevTools; може да изпълни JS преди снимката.
  (`msedge --screenshot` показва празно при превъртане — ползвай cdp-shot.)
- `serve.mjs` — локален сървър (порт 8765 е зает от друго, ползвай 8931).
- `fetch-quran.mjs`, `split-quran.mjs`, `build-places.mjs`, `fetch-muftiate.mjs`, `fit.mjs`… — еднократни, за пресъздаване на данните.

## Облачна сесия (claude.ai/code)
- Изходящата мрежа е ограничена: grandmufti.bg, everyayah.com, quran.com са блокирани — update-prayer и check-reciters не могат да се пуснат там.
  Достъпни са npm и raw.githubusercontent.com.
- НЕ ползвай `pkill -f <шаблон>` — съвпада и с текста на собствената команда и убива обвивката.
- Тест в браузър: глобален Playwright (`NODE_PATH=/opt/node22/lib/node_modules`) + `node tools/serve.mjs 8931`;
  компасът се симулира с `new DeviceOrientationEvent('deviceorientationabsolute', { alpha, absolute: true })`.

## Тестове — `node tools/test/run.cjs` (Playwright; axe-core по желание)
Сам пуска сървър на свободен порт; на Windows без Chromium ползва Edge. 62 проверки (~2,5 мин):
- `regress.cjs` — всеки бъг от трите прегледа (часовник с `page.clock`, истинско аудио с генериран WAV вместо everyayah);
- `features.cjs` — кибла (симулиран компас), превод и търсене, листове/фокус, axe, препълване при 320/390/1280, офлайн с изключен сървър.
В облака: `NODE_PATH=/opt/node22/lib/node_modules node tools/test/run.cjs` (axe: `npm i axe-core` някъде и добави към NODE_PATH).
update-prayer.mjs е проверен срещу имитиран grandmufti.bg (същата таблица / друга година / промяна в град) — скриптът не е в репото.

## Идеи за после
- Известия за намаз (изискват push сървър или отворено приложение).
- Тефсир, изтегляне на аудио офлайн.
- Готово: Кибла компас, заучаване по диапазон айети, месечният GitHub Action.
