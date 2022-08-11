import React from "react";
import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

import "./styles/global.css";

// @ts-ignore
const AllTheProviders = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
