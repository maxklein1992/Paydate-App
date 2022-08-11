import React from "react";

import Container from "../UI/Container/Container";
import styles from "./Footer.module.scss";
import type { Props } from "./Footer.types";

const Footer = ({ payOff }: Props) => {
  return (
    <footer>
      <div className={styles.footer}>
        <Container>
          <p>
            <strong>{payOff}</strong>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
