import React from "react";

import Container from "../UI/Container/Container";
import styles from "./Header.module.scss";
import type { Props } from "./Header.types";

const Header = ({ title, description }: Props) => {
  return (
    <Container className={styles.container}>
      <header>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </header>
    </Container>
  );
};

export default Header;
