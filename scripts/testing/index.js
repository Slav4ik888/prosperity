// ----------------------------------------
// ------------     TESTING    ------------
// ----------------------------------------

/**
 * Тестирует функцию
 * @param {*} func 
 * @param {*} toEqual 
 * @returns 
 */
export const testEqual = (func, toEqual) => {
  console.log(``);
  if (!func) return console.log(`Не указали проверяемую функцию`);

  const resultFunc = func();
  if (resultFunc === toEqual) console.log(`Верно`)
  else {
    console.log(`Ошибка!`);
    console.log(`Expected: ${toEqual}`);
    console.log(`Recivied: ${resultFunc}`);
  }
  console.log(`------------------------------`);

  return
};
