import { getLastWorkingDayInMonth } from "./getLastWorkingDayInMonth";
import getMonthName from "@utils/getMonthName/getMonthName";

export enum SalaryType {
  Salary = "salary",
  Bonus = "bonus",
}

/**
 * Checks whether the date is a weekday
 */
const isWeekday = (date: Date) => date.getDay() !== 6 && date.getDay() !== 0; // 6 = Saturday, 0 = Sunday

/**
 * Checks whether the date is a saturday
 */
const isSaturday = (date: Date) => date.getDay() === 6; // 6 = Saturday, 0 = Sunday

/**
 * Creates an array of payment days for salary or bonus for the remaining months of the year
 *
 * For Salary:
 * Paid on last working day of the month
 *
 * For Bonus:
 * Paid on 15th if it is not a weekend day
 * Else, paid on first wednesday after 15th
 *
 * @returns Array of payment dates for the remaining months of the year
 */

export const calculatePayDates = (salaryType: SalaryType) => {
  const today = new Date();

  let payDates = [];

  if (salaryType === SalaryType.Salary) {
    // Salary

    // Retrieves all remaining salary pay dates of remaining of the year
    for (let i = 0; i < 12 - today.getMonth(); i++) {
      // Last working day of the month
      const lastWorkingDay = getLastWorkingDayInMonth(
        new Date(today.getFullYear(), today.getMonth() + i)
      );

      // If pay date is in the past, the pay date should not be shown
      lastWorkingDay! >= today &&
        payDates.push({
          salaryDate: lastWorkingDay!.getDate(),
          month: getMonthName(new Date(lastWorkingDay!)),
          variant: "salary",
        });
    }
  } else {
    // Bonus

    // Retrieves all remaining bonus pay dates of remaining of the year
    for (let i = 0; i < 12 - today.getMonth(); i++) {
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

      // If pay date is in the past, the pay date should not be shown
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
