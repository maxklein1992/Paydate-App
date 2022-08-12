import { render } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";

import PayDatesOverview from "./PayDatesOverview";
import { Month, Props } from "./PayDatesOverview.types";
import { SalaryType } from "../calculatePayDates";

export const mockData: Props = {
  payDates: [
    {
      month: Month.September,
      bonusDate: 15,
      variant: SalaryType.Bonus,
    },
    {
      month: Month.October,
      bonusDate: 15,
      variant: SalaryType.Bonus,
    },
    {
      month: Month.November,
      bonusDate: 15,
      variant: SalaryType.Bonus,
    },
    {
      month: Month.December,
      bonusDate: 15,
      variant: SalaryType.Bonus,
    },
  ],
};

describe("<PayDatesOverview>", () => {
  it("should render all pay dates items", () => {
    const { getAllByRole } = render(<PayDatesOverview {...mockData} />);
    const navAccountItems = getAllByRole("presentation");

    expect(navAccountItems).toHaveLength(mockData.payDates.length);
  });

  it("should render month and day", () => {
    const { getByText, getAllByText } = render(
      <PayDatesOverview {...mockData} />
    );
    const month = getByText(`Month: ${mockData.payDates[0].month}`);

    expect(month).toBeTruthy;

    const day = getAllByText("15");

    expect(day).toBeTruthy;
  });

  it("supports keyboard events", async () => {
    const { getAllByRole } = render(<PayDatesOverview {...mockData} />);
    const payDatesItems = getAllByRole("presentation");
    const firstPayDateItem = payDatesItems[0];
    const secondPayDateItem = payDatesItems[1];

    firstPayDateItem.focus();
    expect(firstPayDateItem).toHaveFocus();

    await userEvent.keyboard("[ArrowRight]");
    expect(secondPayDateItem).toHaveFocus();

    await userEvent.keyboard("[ArrowLeft]");
    expect(firstPayDateItem).toHaveFocus();

    await userEvent.keyboard("[ArrowDown]");
    expect(secondPayDateItem).toHaveFocus();

    await userEvent.keyboard("[ArrowUp]");
    expect(firstPayDateItem).toHaveFocus();
  });
});
