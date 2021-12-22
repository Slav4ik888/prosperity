
export const prepareDate = (_date) => {
  if (!_date) return ``;

  const date = new Date(_date);
  const year = date.getFullYear();
  const month = (`0` + (date.getMonth() + 1)).slice(-2);
  const day = (`0` + date.getDate()).slice(-2);
  
  return day + `.` + month + `.` + year;
};