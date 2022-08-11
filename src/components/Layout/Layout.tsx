import React from "react";
import { useEffect, useState } from "react";

import { footerData } from "@components/Footer/Footer.data";
import { headerData } from "@components/Header/Header.data";
import { payDatesData } from "@components/PayDatesMain/PayDatesMain.data";
import calculatePayDates from "@components/PayDatesMain/calculatePayDates";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import PayDatesMain from "@components/PayDatesMain/PayDatesMain";
import styles from "./Layout.module.scss";
import type {
  BonusDate,
  SalaryDate,
} from "@components/PayDatesMain/PayDatesOverview/PayDatesOverview.types";

const Layout = () => {
  const [salaryDates, setSalaryDates] = useState<SalaryDate[] | undefined>();
  const [bonusDates, setBonusDates] = useState<BonusDate[] | undefined>();

  /**
   * Sets Salary and Bonus dates
   */
  useEffect(() => {
    setSalaryDates(calculatePayDates("salary") as SalaryDate[]);
    setBonusDates(calculatePayDates("bonus") as BonusDate[]);
  }, []);

  return (
    <div className={styles.container}>
      <Header {...headerData} />
      <PayDatesMain
        bonusDates={bonusDates}
        salaryDates={salaryDates}
        noBonusDatesLeft={payDatesData.noBonusDatesLeft}
        noSalaryDatesLeft={payDatesData.noSalaryDatesLeft}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer {...footerData}></Footer>
    </div>
  );
};

export default Layout;
