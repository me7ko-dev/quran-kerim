// Обновява data/prayer.json от официалния календар на Главно мюфтийство (grandmufti.bg).
// Пуска се ръчно или от GitHub Actions всеки месец: node tools/update-prayer.mjs
// Календарът на Мюфтийството = таблица за София + постоянна разлика в минути за всеки град.
// Скриптът проверява това; ако някой град не следва правилото, записва пълната му таблица.
import fs from 'fs';
import path from 'path';
const here = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1'));
const URL_ = 'https://www.grandmufti.bg/bg/home/vremena-za-namaz.html';
const TOWNS = JSON.parse(fs.readFileSync(path.join(here, 'muftiate-towns.json')));
const OUT = path.join(here, '../data/prayer.json');

async function get(month, town) {
  for (let a = 0; a < 5; a++) {
    try {
      const r = await fetch(URL_, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded', 'user-agent': 'quran-kerim (github.com/me7ko-dev/quran-kerim)' }, body: `month=${month}&town=${town}` });
      const s = await r.text();
      const i = s.indexOf('<table'); if (i < 0) throw new Error('no table');
      const rows = s.slice(i, s.indexOf('</table>', i)).match(/<tr[\s\S]*?<\/tr>/g).slice(1)
        .map(r => r.match(/<td[\s\S]*?<\/td>/g).map(c => c.replace(/<[^>]+>/g, '').trim()));
      const sel = s.slice(s.indexOf('name="town"')).match(/value="([^"]+)" selected/);
      if (!sel || sel[1] !== town) throw new Error('wrong town ' + town);
      return rows.map(r => { if (+r[0] < 1 || r.length !== 7) throw new Error('bad row'); return r.slice(1).map(x => { const [h, m] = x.split(':'); if (isNaN(h) || isNaN(m)) throw new Error('bad time ' + x); return +h * 60 + +m; }); });
    } catch (e) { console.error(town, month, e.message); await new Promise(r => setTimeout(r, 3000)); }
  }
  throw new Error(`Неуспешно сваляне: ${town} ${month}`);
}

// Сайтът показва таблицата с лятното часово време вътре. Превръщаме всичко в зимно време (UTC+2),
// а приложението само добавя лятното за всяка конкретна дата и година.
// Датите на смяна не ги предполагаме — откриваме ги в самата таблица (скок от ~60 мин).
function dstRange(rows) { // rows: 365 реда за София
  const jump = i => rows[i][2] - rows[i - 1][2]; // обяд се мени плавно, скокът е ясно видим
  let start = -1, end = -1;
  for (let i = 59; i < 120; i++) if (jump(i) > 40) start = i;   // март–април
  for (let i = 270; i < 320; i++) if (jump(i) < -40) end = i;   // октомври–ноември
  if (start < 0 || end < 0) throw new Error('Не открих смяната на часовото време в таблицата');
  return [start, end];
}
const DIM = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const tables = {};
for (const id of Object.keys(TOWNS)) {
  const rows = [];
  for (let m = 1; m <= 12; m++) {
    const t = await get(m, id);
    if (t.length < DIM[m - 1]) throw new Error(`${id} ${m}: ${t.length} дни`);
    t.slice(0, DIM[m - 1]).forEach(r => rows.push(r));
    await new Promise(r => setTimeout(r, 200));
  }
  tables[id] = rows;
  process.stdout.write(id + ' ');
}
const [ds, de] = dstRange(tables.sofia);
for (const id in tables) tables[id] = tables[id].map((r, i) => i >= ds && i < de ? r.map(v => v - 60) : r);
const base = tables.sofia;
// проверка за здрав смисъл: зора < изгрев < обяд < следобяд < залез < нощ
base.forEach((r, i) => { for (let k = 1; k < 6; k++) if (r[k] <= r[k - 1]) throw new Error('ред ' + i); });
const towns = {};
for (const [id, [name, lat, lon, obl]] of Object.entries(TOWNS)) {
  const diffs = new Set(tables[id].flatMap((r, i) => r.map((v, k) => v - base[i][k])));
  towns[id] = { name, lat, lon, obl, shift: diffs.size === 1 ? [...diffs][0] : null };
  if (diffs.size !== 1) { towns[id].table = tables[id]; console.warn('\nВНИМАНИЕ: ' + name + ' не е постоянна разлика спрямо София'); }
}
const out = { source: URL_, dstInTable: [ds, de], checked: new Date().toISOString().slice(0, 10), tz: 'UTC+2 (зимно време; лятното се добавя в приложението)', base, towns };
const old = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT)) : null;
const same = old && JSON.stringify({ ...old, checked: 0 }) === JSON.stringify({ ...out, checked: 0 });
if (same) { old.checked = out.checked; fs.writeFileSync(OUT, JSON.stringify(old)); console.log('\nБез промяна.'); }
else { fs.writeFileSync(OUT, JSON.stringify(out)); console.log('\nОбновено: ' + OUT); }
// за GitHub Actions: различно съобщение при истинска промяна
if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `changed=${!same}\n`);
