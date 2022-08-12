import calculatePayDates, { SalaryType } from "./calculatePayDates";
import { Month } from "./PayDatesOverview/PayDatesOverview.types";

describe("calculatePayDates()", () => {
  it("should return salary payment dates for remainder of the year", () => {
    expect(calculatePayDates(new Date("2022-8-01"), SalaryType.Salary)).toEqual(
      [
        { month: Month.August, salaryDate: 31, variant: SalaryType.Salary },
        { month: Month.September, salaryDate: 30, variant: SalaryType.Salary },
        { month: Month.October, salaryDate: 31, variant: SalaryType.Salary },
        { month: Month.November, salaryDate: 30, variant: SalaryType.Salary },
        { month: Month.December, salaryDate: 30, variant: SalaryType.Salary },
      ]
    );
  });

  it("should return bonus payment dates for remainder of the year", () => {
    expect(calculatePayDates(new Date("2022-8-01"), SalaryType.Bonus)).toEqual([
      { month: Month.August, bonusDate: 15, variant: SalaryType.Bonus },
      { month: Month.September, bonusDate: 15, variant: SalaryType.Bonus },
      { month: Month.October, bonusDate: 19, variant: SalaryType.Bonus },
      { month: Month.November, bonusDate: 15, variant: SalaryType.Bonus },
      { month: Month.December, bonusDate: 15, variant: SalaryType.Bonus },
    ]);
  });
});
