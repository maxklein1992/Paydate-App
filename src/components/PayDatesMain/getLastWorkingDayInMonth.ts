import getLastDayOfMonth from "../../utils/getLastDayOfMonth/getLastDayOfMonth";
import isSaturday from "../../utils/isSaturday/isSaturday";
import isWeekday from "../../utils/isWeekday/isWeekday";

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
