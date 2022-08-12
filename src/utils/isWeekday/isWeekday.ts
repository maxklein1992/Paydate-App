/**
 * Checks whether the date is a weekday
 */
const isWeekday = (date: Date) => date.getDay() !== 6 && date.getDay() !== 0; // 6 = Saturday, 0 = Sunday

export default isWeekday;
