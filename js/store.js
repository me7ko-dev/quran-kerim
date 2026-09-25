// Настройки, отметки и последно четене — пазят се само в браузъра на потребителя
const KEY = 'qk:v1';
const DEFAULTS = {
  theme: 'auto',          // auto | light | sepia | dark
  arSize: 32,             // px, арабски текст
  trSize: 17,             // px, превод
  showTr: true,
  mode: 'ayah',           // ayah (айет по айет) | mushaf (непрекъснат текст)
  reciter: 'Alafasy_128kbps',
  rate: 1,
  play: 'continue',       // single | continue | repeat
  repeatN: 3,
  follow: true,           // превърта до айета, който се чете
  autoNext: true,         // продължава със следващата сура
  place: null,            // избраното населено място за намаз
  villageMode: 'corrected', // corrected | town
  last: null,             // { s, a }
  bookmarks: [],          // [{ s, a, t }]
};

let state = { ...DEFAULTS };
try { state = { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch (e) {}

const subs = new Set();
export const store = {
  get: k => state[k],
  set(k, v) {
    state[k] = v;
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
    subs.forEach(f => f(k, v));
  },
  on: f => subs.add(f),
};

export function isBookmarked(s, a) { return state.bookmarks.some(b => b.s === s && b.a === a); }
export function toggleBookmark(s, a) {
  const on = isBookmarked(s, a);
  store.set('bookmarks', on ? state.bookmarks.filter(b => !(b.s === s && b.a === a)) : [{ s, a, t: Date.now() }, ...state.bookmarks]);
  return !on;
}
