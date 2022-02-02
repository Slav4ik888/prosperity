import { addTd, createElement } from './index.js';

const isUser = (str) => str?.startsWith(`user`);


export const createResultStrip = (resMessage, edit) => {
  const isNoUserClass = isUser(resMessage?.user) ? `no-user-name` : ``;
  console.log('isNoUserClass: ', isNoUserClass);
  const $tr = createElement(`tr`);

  addTd($tr, ``,                           resMessage.date);
  addTd($tr, [`user-name`, isNoUserClass], resMessage.user);
  addTd($tr, `user-name`,                  resMessage.from,       edit);
  addTd($tr, ``,                           resMessage.fromId,     edit);
  addTd($tr, ``,                           resMessage.result);
  addTd($tr, `origin-text`,                resMessage.originText, edit);
  
  return $tr;
}