import React from "react";

//import DsIcon from "../DsIcon/DsIcon";
import styles from "./Button.module.scss";
import type { Props } from "./Button.types";

const DsButton = ({
  as: Container = "button",
  children,
  disabled,
  fullWidth = false,
  loading = false,
  size = "medium",
  variant = "primary",
  onClick,
  className,
  ...props
}: Props) => {
  // Defensive
  if (typeof children !== "string" || !children) return null;

  // Classes to apply
  // @todo: research in optimizing class assignment
  // https://betterprogramming.pub/using-css-modules-with-react-in-2020-73c2223f495c
  const classNames = [
    fullWidth ? styles.fullWidth : "",
    loading ? styles.loading : "",
    styles.button,
    styles[size],
    styles[variant],
    className,
  ]
    .join(" ")
    .trim();

  return (
    <Container
      aria-disabled={disabled}
      className={classNames}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
    </Container>
  );
};

export default DsButton;