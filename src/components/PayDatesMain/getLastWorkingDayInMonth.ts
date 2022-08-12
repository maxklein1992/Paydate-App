import getLastDayOfMonth from "../../utils/getLastDayOfMonth/getLastDayOfMonth";

/**
 * Checks whether the date is a weekday
 */
const isWeekday = (date: Date) => date.getDay() !== 6 && date.getDay() !== 0; // 6 = Saturday, 0 = Sunday

/**
 * Checks whether the date is a saturday
 */
const isSaturday = (date: Date) => date.getDay() === 6; // 6 = Saturday, 0 = Sunday

/**
 * Provides the last working day in a month
 *
 * @returns Last working day in a month
 */

export const getLastWorkingDayInMonth = (date: Date) => {
  // Last day in month
  const lastDayInMonth = getLastDayOfMonth(
    new Date(date.getFullYear(), date.getMonth())
  );

  // If weekday, return day
  if (isWeekday(lastDayInMonth)) return lastDayInMonth;

  // If weekend, return friday before
  if (isSaturday(lastDayInMonth)) {
    // If saturday
    return new Date(
      date.getFullYear(),
      lastDayInMonth.getMonth(),
      lastDayInMonth.getDate() - 1
    );
  } else {
    // If sunday
    return new Date(
      date.getFullYear(),
      lastDayInMonth.getMonth(),
      lastDayInMonth.getDate() - 2
    );
  }
};
