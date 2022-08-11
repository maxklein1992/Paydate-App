import React from "react";
import { render } from "../../../../test/testUtils";

import Container from "./Container";

describe("Container component", () => {
  it("renders if children are set", async () => {
    const { getByText } = render(<Container>My container</Container>, null);
    expect(getByText("My container")).toBeTruthy();
  });

  it("renders nothing if no 'children'", async () => {
    const { container } = render(<Container />, null);
    expect(container).toBeEmptyDOMElement();
  });
});
