import React from "react";

import { render } from "@testing-library/react";
import Header from "./Header";
import type { Props } from "./Header.types";

export const mockData: Props = {
  title: "Title",
  description: "Description",
};

describe("<Header>", () => {
  it("should render a component title and description", () => {
    const { queryByText } = render(<Header {...mockData} />);

    const description = queryByText(mockData.description);
    expect(description).toBeTruthy();

    const title = queryByText(mockData.title);
    expect(title).toBeTruthy();
  });
});
