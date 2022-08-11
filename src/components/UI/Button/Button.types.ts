import type { ComponentPropsWithoutRef } from "react";

type ComponentProps = ComponentPropsWithoutRef<"button"> &
  ComponentPropsWithoutRef<"a">;

export type Props = ComponentProps & {
  /**
   * * HTML element to use for root node.
   * @default button
   */
  as?: "button" | "a";
  /**
   * If true, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If true, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * If true, the button is in a loading state.
   * @default false
   */
  loading?: boolean;
  /**
   * Onclick event of the component.
   */
  onClick?: () => void;
  /**
   * The size of the component.
   * @default medium
   */
  size?: "medium" | "small";
  /**
   * The variant to render.
   * @default primary
   */
  variant?: "primary" | "secondary";
};
