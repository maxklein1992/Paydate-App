import React from "react";
import { render } from "../../../test/testUtils";

import Header from "./Header";
import { Props } from "./Header.types";

export const mockData: Props = {
  title: "Title",
  description: "Description",
};

describe("<Header>", () => {
  it("should render a component title and description", () => {
    const { queryByText } = render(<Header {...mockData} />);

    const description = queryByText(mockData.description);
    expect(description).toBeTruthy();
  });
});
