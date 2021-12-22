import { sortingArr } from '../sorting/sorting-arr.js';
import { createElement, createResultStrip } from './index.js';
import { filterResult } from '../process/filter-result.js';


export const showResults = (results, short) => {
  const $container = document.querySelector(`.container`);
  const $table = createElement(`table`, `results`);
  const $tbody = document.createElement(`tbody`);
  
  $table.insertAdjacentElement(`afterbegin`, $tbody);
    
  const filtredResult = short ? filterResult(results) : [...results];
  const sortedResults = short ? [...filtredResult] : sortingArr(results, `date`, true);
  console.log('LENGHT: ', sortedResults.length);

  sortedResults.forEach(r => {
    $tbody.insertAdjacentElement('beforeend', createResultStrip(r, short));
  });

  $container.insertAdjacentElement('beforeend', $table);
};