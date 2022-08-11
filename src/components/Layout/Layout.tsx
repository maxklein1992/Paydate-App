import React from "react";

import { Container } from "@components/UI";
import { footerData } from "@components/Footer/Footer.data";
import { headerData } from "@components/Header/Header.data";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Header {...headerData} />
      <main id="content">
        <Container>{children}</Container>
      </main>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer {...footerData}></Footer>
    </div>
  );
};

export default Layout;
