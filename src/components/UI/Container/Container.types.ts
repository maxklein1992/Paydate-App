import { ComponentPropsWithoutRef, ElementType } from "react";

export type Props = ComponentPropsWithoutRef<any> & {
  /**
   * Renders as another element type.
   */
  as?: ElementType<any>;
};
