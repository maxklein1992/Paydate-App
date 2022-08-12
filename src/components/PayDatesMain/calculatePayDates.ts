import { getLastWorkingDayInMonth } from "./getLastWorkingDayInMonth";
import getMonthName from "../../utils/getMonthName/getMonthName";
import isWeekday from "../../utils/isWeekday/isWeekday";
import isSaturday from "../../utils/isSaturday/isSaturday";

export enum SalaryType {
  Salary = "salary",
  Bonus = "bonus",
}

/**
 * Creates an array of payment days for salary and bonus for the remaining months of the year
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

export const calculatePayDates = (date: Date, salaryType: SalaryType) => {
  let payDates = [];

  if (salaryType === SalaryType.Salary) {
    // Salary

    // Retrieves all remaining salary pay dates of remaining of the year
    for (let i = 0; i < 12 - date.getMonth(); i++) {
      // Last working day of the month
      const lastWorkingDay = getLastWorkingDayInMonth(
        new Date(date.getFullYear(), date.getMonth() + i)
      );

      // If pay date is in the past, the pay date should not be shown
      lastWorkingDay! >= date &&
        payDates.push({
          salaryDate: lastWorkingDay!.getDate(),
          month: getMonthName(new Date(lastWorkingDay!)),
          variant: SalaryType.Salary,
        });
    }
  } else {
    // Bonus

    // Retrieves all remaining bonus pay dates of remaining of the year
    for (let i = 0; i < 12 - date.getMonth(); i++) {
      // 15th day of the month
      const fifteenthDay = new Date(
        date.getFullYear(),
        date.getMonth() + i,
        15
      );

      // Checks if 15th of the month is a weekday
      // If 15th of the month is in the weekend, the bonus day will be on the next wednesday
      const bonusDay = isWeekday(fifteenthDay)
        ? fifteenthDay
        : isSaturday(fifteenthDay)
        ? new Date(
            fifteenthDay.getFullYear(),
            fifteenthDay.getMonth(),
            fifteenthDay.getDate() + 4
          )
        : new Date(
            fifteenthDay.getFullYear(),
            fifteenthDay.getMonth(),
            fifteenthDay.getDate() + 3
          );

      // If pay date is in the past, the pay date should not be shown
      bonusDay >= date &&
        payDates.push({
          bonusDate: bonusDay.getDate(),
          month: getMonthName(new Date(bonusDay!)),
          variant: SalaryType.Bonus,
        });
    }
  }

  return payDates;
};

export default calculatePayDates;
