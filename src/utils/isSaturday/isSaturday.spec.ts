import isSaturday from "./isSaturday";

describe("isSaturday()", () => {
  it("should return whether the date is a saturday", () => {
    const firstDate = new Date("2022-08-13");
    expect(isSaturday(firstDate)).toEqual(true);

    const secondDate = new Date("2022-08-14");
    expect(isSaturday(secondDate)).toEqual(false);
  });
});
