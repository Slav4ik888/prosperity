export const validate = (message) => {
  if (!message?.from_id) return false; // При некоторых действиях нет этого поля
  return true;
}