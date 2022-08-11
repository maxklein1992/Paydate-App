import React from "react";

import styles from "./Container.module.scss";
import type { Props } from "./Container.types";

const Container = ({
  as: Container = "div",
  children,
  className,
  ...props
}: Props) => {
  // Defensive
  if (!children) return null;

  const classNames = [styles.container, className].join(" ").trim();

  return (
    <Container className={classNames} {...props}>
      {children}
    </Container>
  );
};

export default Container;
