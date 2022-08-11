import React from "react";

import { render } from "@testing-library/react";
import Footer from "./Footer";
import type { Props } from "./Footer.types";

export const mockData: Props = {
  payOff: "Payoff",
};

describe("<Footer>", () => {
  it("should render a payoff", () => {
    const { queryByText } = render(<Footer {...mockData} />);

    const payOff = queryByText(mockData.payOff);
    expect(payOff).toBeTruthy();
  });
});
