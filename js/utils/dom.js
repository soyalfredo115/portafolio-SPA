export const qs = (sel, el = document) => el.querySelector(sel);
export const qsa = (sel, el = document) => [...el.querySelectorAll(sel)];
export const on = (el, ev, cb) => el.addEventListener(ev, cb);
export function html(strings, ...vals) {
  return strings.reduce((acc, s, i) => acc + s + (vals[i] ?? ''), '');
}