import { createElement, addClasses } from './index.js';


export const addTd = (elem, classNames, value, edit) => {
  if (edit === false) return ``

  const $td = createElement(`td`, `result-strip-item`);
  if (classNames.length) addClasses($td, classNames);

  $td.textContent = value;
  elem.insertAdjacentElement(`beforeend`, $td);
};