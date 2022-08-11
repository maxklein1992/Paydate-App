import React from "react";

import Container from "@components/UI/Container/Container";
import styles from "./Header.module.scss";
import type { Props } from "./Header.types";

const Header = ({ title, description }: Props) => {
  return (
    <Container>
      <header>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </header>
      {/* <Button size="small" variant="secondary" onClick={() => alert("Max")}>
        Test Button
      </Button> */}
    </Container>
  );
};

export default Header;
