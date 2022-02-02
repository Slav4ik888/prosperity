
/**
 * Add classes into elem
 * @param {Node} $elem 
 * @param {Array<string>} classes 
 * @returns 
 */
export const addClasses = ($elem, classes) => {
  if (!classes || !classes?.length) return;

  if (Array.isArray(classes)) classes?.forEach(className => {
    if (className) $elem.classList.add(className);
  });
  else $elem.classList.add(classes)
};
