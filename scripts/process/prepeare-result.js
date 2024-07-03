import { testEqual } from '../testing/index.js';


export const getDigit = (str) => str.replace(/\D/g, '');

const getNumber = (str) => {
  const match = str.match(/(\d+)\s*\//);

  if (match) {
    return match[1];
    // console.log(match[1]); // Output: 60
  } else {
    // console.log('No match found');
  }
};

const getNumberFromArray = (text) => {
  let str = '';
  
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


testEqual(() => prepeareResult('40 60/80, sdlfkjlj')       , '60');
testEqual(() => prepeareResult('60/80, sdlfkjlj')          , '60');
testEqual(() => prepeareResult(['60/80, sdlfkjlj'])        , '60');
testEqual(() => prepeareResult([{text: '60/80, sdlfkjlj'}]), '60');
