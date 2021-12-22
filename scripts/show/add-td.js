import { createElement } from './index.js';

export const addTd = (elem, className = ``, value, short) => {
  if (short) return ``

  const $td = createElement(`td`, `result-strip-item`);
  if (className) $td.classList.add(className);

  $td.textContent = value;
  elem.insertAdjacentElement(`beforeend`, $td);
};