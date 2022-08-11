/**
 * Returns last day in a month
 */
const getLastDayOfMonth = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0);

export default getLastDayOfMonth;
