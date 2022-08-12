import isWeekday from "./isWeekday";

describe("isWeekday()", () => {
  it("should return whether the date is a weekday", () => {
    const firstDate = new Date("2022-08-12");
    expect(isWeekday(firstDate)).toEqual(true);

    const secondDate = new Date("2022-08-13");
    expect(isWeekday(secondDate)).toEqual(false);
  });
});
