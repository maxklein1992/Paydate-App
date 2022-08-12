import React from "react";

import { Month } from "./PayDatesOverview/PayDatesOverview.types";
import { render } from "@testing-library/react";
import { SalaryType } from "./calculatePayDates";
import PayDatesMain from "./PayDatesMain";
import type { Props } from "./PayDatesMain.types";

export const mockData: Props = {
  bonusDates: [
    {
      bonusDate: 15,
      month: Month.November,
      variant: SalaryType.Bonus,
    },
    {
      bonusDate: 15,
      month: Month.December,
      variant: SalaryType.Bonus,
    },
  ],
  downloadExcel: "Download Button",
  noBonusDatesLeft: "No Bonus Dates Left",
  noSalaryDatesLeft: "No Salary Dates Left",
  payDates: [
    {
      bonusDate: 15,
      salaryDate: 31,
      month: Month.November,
    },
    {
      bonusDate: 15,
      salaryDate: 31,
      month: Month.December,
    },
  ],
  bonusPaymentDates: "Bonus Payment Dates",
  salaryDates: [
    {
      salaryDate: 31,
      month: Month.November,
      variant: SalaryType.Salary,
    },
    {
      salaryDate: 31,
      month: Month.December,
      variant: SalaryType.Salary,
    },
  ],
  salaryPaymentDates: "Salary Payment Dates",
};

describe("<PayDatesMain>", () => {
  it("should render 'bonusPaymentDates' and 'salaryPaymentDates' props if there are payment Dates", () => {
    const { queryByText } = render(<PayDatesMain {...mockData} />);
    const firstTitle = queryByText(mockData.bonusPaymentDates);

    expect(firstTitle).toBeTruthy();

    const secondTitle = queryByText(mockData.salaryPaymentDates);

    expect(secondTitle).toBeTruthy();
  });
  it("should render 'noSalaryDatesLeft' props if no salary Dates", () => {
    const props = {
      ...mockData,
      salaryDates: undefined,
    };
    const { queryByText } = render(<PayDatesMain {...props} />);
    const title = queryByText(mockData.noSalaryDatesLeft);

    expect(title).toBeTruthy();
  });

  it("should render 'noBonusDatesLeft' props if no Bonus Dates", () => {
    const props = {
      ...mockData,
      bonusDates: undefined,
    };
    const { queryByText } = render(<PayDatesMain {...props} />);
    const title = queryByText(mockData.noBonusDatesLeft);

    expect(title).toBeTruthy();
  });

  it("should render download button if there are payment dates", () => {
    const { queryByText } = render(<PayDatesMain {...mockData} />);
    const title = queryByText(mockData.downloadExcel);

    expect(title).toBeTruthy();
  });

  it("should not render download button if there are no payment dates", () => {
    const props = {
      ...mockData,
      bonusDates: undefined,
      payDates: undefined,
      salaryDates: undefined,
    };
    const { queryByText } = render(<PayDatesMain {...props} />);
    const title = queryByText(mockData.downloadExcel);

    expect(title).toBeFalsy();
  });
});
