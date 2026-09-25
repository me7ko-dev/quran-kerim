# Бележки от сесиите (обновено 2026-09-25, втора сесия)

> Прочети това вместо да преглеждаш репото наново.

**На живо:** https://me7ko-dev.github.io/quran-kerim/ · репо `me7ko-dev/quran-kerim` · папка `~/Projects/quran-kerim`
Статичен сайт (без build). Push в `main` → Pages се обновява за ~1 мин.

## Устройство
- `js/app.js` — рутер (`#/`, `#/s/2/255`, `#/prayer`, `#/prayer/<място>`, `#/qibla`, `#/bookmarks`, `#/settings`, `#/search/<дума>`) и всички екрани.
- `js/audio.js` — списък рецитатори (папки на everyayah.com) + плейър (един `<audio>` заради iPhone; режими single/continue/repeat/range).
  `range` = заучаване: `playRange(s, from, to, each, loops)`, loops 0 = без край; не се пази в `play`, само `hifz: {each, loops}`.
- `js/qibla.js` — посока по голям кръг, магнитно отклонение (≈5.3° + 0.23 × (дълж. − 23.3)), час „слънцето сочи киблата“, компас (iPhone: `webkitCompassHeading` + разрешение; Android: `deviceorientationabsolute`).
- `js/prayer.js` — времена за намаз; `js/store.js` — настройки в localStorage (`qk:v1`).
- `data/s/<n>.json` — `[арабски QPC Hafs, превод Теофанов, страница, джуз]` за всеки айет; `data/meta.json` — сури (имена на български) и джузове.
- `data/tr/<n>.json` — турски превод на Диянет (Tanzil), масив по айети; от `tools/fetch-turkish.mjs`. Настройка `trLang`: bg | tr | both.
  Търсенето винаги включва българския + избраните езици; турското сравнение приравнява I/ı/İ/i.
- `data/prayer.json` — `base` (365 реда за София, зимно време UTC+2) + `towns` (48 града с `shift` в минути).
- `data/places.json` — 6 911 населени места от OSM: `[име, 0 град/1 село/2 махала, lat, lon, област, община]`.
- Шрифтове: всички са в `fonts/` (Manrope, Cormorant Garamond — поднабори latin/latin-ext/cyrillic от @fontsource-variable; лиценз `fonts/OFL.txt`). Без Google Fonts.
- `sw.js` — офлайн. Код: мрежа първо (4 сек таймаут → кеш), `qk-shell-vN`. Текст/шрифт: кеш първо в `qk-data-v1` —
  увеличи го САМО при поправка на текст в `data/s/`, `data/tr/` или `places.json` (всички потребители ще изтеглят наново ~4 MB).

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
  Достъпни са npm и raw.githubusercontent.com (оттам е турският превод).
- НЕ ползвай `pkill -f <шаблон>` — съвпада и с текста на собствената команда и убива обвивката.
- Тест в браузър: глобален Playwright (`NODE_PATH=/opt/node22/lib/node_modules`) + `node tools/serve.mjs 8931`;
  компасът се симулира с `new DeviceOrientationEvent('deviceorientationabsolute', { alpha, absolute: true })`.

## Тестове (в облачната сесия)
Скриптовете са в scratchpad-а на сесията, не в репото: регресии за 13-те бъга от прегледа (часовник с `page.clock`,
истинско аудио с генериран WAV вместо everyayah), компас, заучаване, axe (0 нарушения), оформление при 320/390/1280 × 3 теми,
офлайн с изключен сървър, update-prayer срещу имитиран grandmufti.bg (същата таблица / друга година / промяна в град).

## Идеи за после
- Известия за намаз (изискват push сървър или отворено приложение).
- Тефсир, изтегляне на аудио офлайн.
- Готово: Кибла компас, заучаване по диапазон айети, месечният GitHub Action, турски превод.
