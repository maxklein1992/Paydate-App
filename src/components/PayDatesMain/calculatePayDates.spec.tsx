import calculatePayDates, { SalaryType } from "./calculatePayDates";

describe("calculatePayDates()", () => {
  it("should return salary payment dates for remainder of the year", () => {
    expect(calculatePayDates(new Date("2022-8-01"), SalaryType.Salary)).toEqual(
      [
        { month: "August", salaryDate: 31, variant: "salary" },
        { month: "September", salaryDate: 30, variant: "salary" },
        { month: "October", salaryDate: 31, variant: "salary" },
        { month: "November", salaryDate: 30, variant: "salary" },
        { month: "December", salaryDate: 30, variant: "salary" },
      ]
    );
  });

  it("should return bonus payment dates for remainder of the year", () => {
    expect(calculatePayDates(new Date("2022-8-01"), SalaryType.Bonus)).toEqual([
      { month: "August", bonusDate: 15, variant: "bonus" },
      { month: "September", bonusDate: 15, variant: "bonus" },
      { month: "October", bonusDate: 19, variant: "bonus" },
      { month: "November", bonusDate: 15, variant: "bonus" },
      { month: "December", bonusDate: 15, variant: "bonus" },
    ]);
  });
});
