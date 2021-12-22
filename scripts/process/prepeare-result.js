export const getDigit   = (str) => str.replace(/\D/g, ``);

export const prepeareResult = (text) => {
  if (!text) return 0;

  const idx = text.indexOf(`/`);
  if (idx === -1) return 0

  const str = text.slice(0, idx);

  return getDigit(str)
};
