import getMonthName from "./getMonthName";

describe("getMonthName()", () => {
  it("should return correct month name as string", () => {
    const firstDate = new Date(2022, 7, 12);
    expect(getMonthName(firstDate)).toBe("August");

    const secondDate = new Date(2022, 8, 12);
    expect(getMonthName(secondDate)).toBe("September");
  });
});
