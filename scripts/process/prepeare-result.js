import { testEqual } from '../testing/index.js';


export const getDigit = (str) => str.replace(/\D/g, ``);
const getNumber = (str) => {
  const idx = str.indexOf(`/`);
  if (idx === -1) return 0

  const _str = str.slice(0, idx);

  return getDigit(_str)
};

const getNumberFromArray = (text) => {
  let str = ``;
  
  text.forEach(item => {
    if (typeof item === 'string') str += item;
    else if (item?.text) str += item.text;
  });
  return getNumber(str);
}

export const prepeareResult = (text) => {
  if (!text) return 0;
  
  if (Array.isArray(text)) return getNumberFromArray(text);
  return getNumber(text)
};

testEqual(() => prepeareResult(`60/60, sdlfkjlj`)          , `60`);
testEqual(() => prepeareResult([`60/60, sdlfkjlj`])        , `60`);
testEqual(() => prepeareResult([{text: `60/60, sdlfkjlj`}]), `60`);
