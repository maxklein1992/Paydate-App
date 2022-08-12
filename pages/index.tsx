import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";

import { Layout, PayDatesMain } from "@components/index";
import { payDatesData } from "@components/PayDatesMain/PayDatesMain.data";
import calculatePayDates, {
  SalaryType,
} from "@components/PayDatesMain/calculatePayDates";
import type {
  BonusDate,
  SalaryDate,
} from "@components/PayDatesMain/PayDatesOverview/PayDatesOverview.types";

const Home: NextPage = () => {
  const [salaryDates, setSalaryDates] = useState<SalaryDate[] | undefined>();
  const [bonusDates, setBonusDates] = useState<BonusDate[] | undefined>();
  const [payDates, setPayDates] = useState<
    (BonusDate | SalaryDate)[] | undefined
  >();

  /**
   * Sets Salary and Bonus dates
   */
  useEffect(() => {
    setSalaryDates(
      calculatePayDates(new Date(), SalaryType.Salary) as SalaryDate[]
    );
    setBonusDates(
      calculatePayDates(new Date(), SalaryType.Bonus) as BonusDate[]
    );
  }, []);

  /**
   * Combine Salary and Bonus dates in order to create a CSV file later
   */
  useEffect(() => {
    if (salaryDates && bonusDates) {
      const combinedPayDates =
        salaryDates &&
        salaryDates!.map((salaryItem) => ({
          ...salaryItem,
          ...bonusDates!.find(
            (bonusItem) => bonusItem.month === salaryItem.month
          ),
        }));
      setPayDates(combinedPayDates);
    }
  }, [salaryDates, bonusDates]);

  return (
    <div>
      <Head>
        <title>
          Determine the day of payments for your company - Paydate Calculator
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PayDatesMain
          bonusDates={bonusDates}
          payDates={payDates}
          salaryDates={salaryDates}
          {...payDatesData}
        />
      </Layout>
    </div>
  );
};

export default Home;
