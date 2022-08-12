import getLastDayOfMonth from "./getLastDayOfMonth";

describe("getLastDayOfMonth()", () => {
  it("should return correct month name as string", () => {
    const firstDate = new Date("2022-01-01");
    expect(getLastDayOfMonth(firstDate)).toEqual(new Date("2022-01-31"));

    const secondDate = new Date("2022-02-01");
    expect(getLastDayOfMonth(secondDate)).toEqual(new Date("2022-02-28"));
  });
});
