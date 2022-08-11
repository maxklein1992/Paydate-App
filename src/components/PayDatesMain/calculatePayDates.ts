import getLastDayOfMonth from "@utils/getLastDayOfMonth/getLastDayOfMonth";
import getMonthName from "@utils/getMonthName/getMonthName";

export type Props = {
  /**
   * Supported payment variants
   */
  variant: "salary" | "bonus";
};

/**
 * Checks whether the date is a weekday
 */
const isWeekday = (date: Date) => date.getDay() !== 6 && date.getDay() !== 0; // 6 = Saturday, 0 = Sunday

/**
 * Checks whether the date is a weekday
 */
const isSaturday = (date: Date) => date.getDay() === 6; // 6 = Saturday, 0 = Sunday

/**
 * Provides the last working day in a month
 *
 * It checks whether the last day in the month is a week- or a weekend day
 * If it is a weekend day, the last working day will be the friday before the weekend
 *
 * @returns Last working day in a month
 */

export const getLastWorkingDayInMonth = (date: Date) => {
  // Last day in month
  const lastDayInMonth = getLastDayOfMonth(
    new Date(date.getFullYear(), date.getMonth())
  );

  // If last day in month is a weekday, return the day
  if (isWeekday(lastDayInMonth)) return lastDayInMonth;

  // If last day in month is a saturday, return the friday before
  if (lastDayInMonth.getDay() === 6)
    return new Date(
      date.getFullYear(),
      lastDayInMonth.getMonth(),
      lastDayInMonth.getDate() - 1
    );

  // If last day in month is a sunday, return the friday before
  if (lastDayInMonth.getDay() === 0)
    return new Date(
      date.getFullYear(),
      lastDayInMonth.getMonth(),
      lastDayInMonth.getDate() - 2
    );
};

/**
 * Creates an array which consists of payment days for the base salary or the bonuses for the remaining months of the year
 *
 * The base salaries are paid on the last day of the month unless that day is a weekend day, then it will be paid on the friday before the weekend
 * So in principle, the base salary will be paid on the last working day in the month
 * The payment dates for the base salary are created by using the 'getLastWorkingDayInMonth' function which delivers the last working day of the month
 *
 * The bonuses for the previous month are paid on the 15th of every month, unless that day is a weekend day
 * If it is a weekend day, it will be paid on the first Wednesday after the 15th
 *
 * @returns Array of payment dates for the remaining months of the year
 */

export const calculatePayDates = (salaryType: Props["variant"]) => {
  const today = new Date();

  var payDates = [];

  if (salaryType === "salary") {
    // Salary

    // Retrieves all remaining salary pay dates of the current year
    for (var i = 0; i < 12 - today.getMonth(); i++) {
      // Last working day of the month
      const lastWorkingDay = getLastWorkingDayInMonth(
        new Date(today.getFullYear(), today.getMonth() + i)
      );

      // If last working day (salary pay date) is in the past, this pay date should not be shown
      lastWorkingDay! >= today &&
        payDates.push({
          salaryDate: lastWorkingDay!.getDate(),
          month: getMonthName(new Date(lastWorkingDay!)),
          variant: "salary",
        });
    }
  } else {
    // Bonus

    // Retrieves all remaining bonus pay dates of the current year
    for (var i = 0; i < 12 - today.getMonth(); i++) {
      // 15th day of the month
      const fifteenthDay = new Date(
        today.getFullYear(),
        today.getMonth() + i,
        15
      );

      // Checks first if 15th of the month is a weekday
      // If 15th of the month is in the weekend, the bonus day will be on the next wednesday
      const bonusDay = isWeekday(fifteenthDay)
        ? fifteenthDay
        : isSaturday(fifteenthDay)
        ? new Date(fifteenthDay.getFullYear(), fifteenthDay.getMonth(), 19)
        : new Date(fifteenthDay.getFullYear(), fifteenthDay.getMonth(), 18);

      // If bonus day is in the past, this pay date should not be shown
      // bonusDay >= today && payDates.push(bonusDay);
      bonusDay >= today &&
        payDates.push({
          bonusDate: bonusDay.getDate(),
          month: getMonthName(new Date(bonusDay!)),
          variant: "bonus",
        });
    }
  }

  return payDates;
};

export default calculatePayDates;
