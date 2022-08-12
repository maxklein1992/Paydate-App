import { getLastWorkingDayInMonth } from "./getLastWorkingDayInMonth";

describe("getLastWorkingDayInMonth()", () => {
  it("should return the last working day in month", () => {
    const firstDate = new Date("2022-8-01");
    expect(getLastWorkingDayInMonth(firstDate)).toEqual(new Date("2022-8-31"));

    const secondDate = new Date("2022-12-01");
    expect(getLastWorkingDayInMonth(secondDate)).toEqual(
      new Date("2022-12-30")
    );
  });
});
