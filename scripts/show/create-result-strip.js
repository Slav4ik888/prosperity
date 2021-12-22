import { addTd, createElement } from './index.js';


export const createResultStrip = (resMessage, short) => {

  const $tr = createElement(`tr`);

  addTd($tr, ``,            resMessage.date);
  addTd($tr, `user-name`,   resMessage.user);
  addTd($tr, `user-name`,   resMessage.from,       short);
  addTd($tr, ``,            resMessage.fromId,     short);
  addTd($tr, ``,            resMessage.result);
  addTd($tr, `origin-text`, resMessage.originText, short);
  
  return $tr;
}