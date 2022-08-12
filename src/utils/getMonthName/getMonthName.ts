/**
 * Returns name of the month
 */

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getMonthName = (date: Date) => monthNames[date.getMonth()];

export default getMonthName;
