import React from "react";
import { render } from "@testing-library/react";

import Container from "./Container";

describe("Container component", () => {
  it("renders if children are set", async () => {
    const { getByText } = render(<Container>My container</Container>);
    expect(getByText("My container")).toBeTruthy();
  });

  it("renders nothing if no 'children'", async () => {
    const { container } = render(<Container />);
    expect(container).toBeEmptyDOMElement();
  });
});
