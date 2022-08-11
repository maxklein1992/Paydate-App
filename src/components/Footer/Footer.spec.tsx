import React from "react";
import { render } from "../../../test/testUtils";

import Footer from "./Footer";
import { Props } from "./Footer.types";

export const mockData: Props = {
  payOff: "Payoff",
};

describe("<Footer>", () => {
  it("should render a payoff description", () => {
    const { queryByText } = render(<Footer {...mockData} />);

    const description = queryByText(mockData.payOff);
    expect(description).toBeTruthy();
  });
});
