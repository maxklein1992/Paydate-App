import { CSVLink } from "react-csv";
import React from "react";

import Container from "@components/UI/Container/Container";
import PayDatesOverview from "./PayDatesOverview/PayDatesOverview";
import styles from "./PayDatesMain.module.scss";
import type { Props } from "./PayDatesMain.types";

const PayDatesMain = ({
  bonusDates,
  payDates,
  salaryDates,
  noBonusDatesLeft,
  noSalaryDatesLeft,
}: Props) => {
  const headers = [
    { label: "Month", key: "month" },
    { label: "Salary Payment Date", key: "salaryDate" },
    { label: "Bonus Payment Date", key: "bonusDate" },
  ];

  return (
    <Container as="section">
      <h2>Salary Payment dates:</h2>
      {salaryDates ? (
        <PayDatesOverview payDates={salaryDates} />
      ) : (
        <p>{noSalaryDatesLeft}</p>
      )}
      <h2>Bonus Payment dates:</h2>
      {bonusDates ? (
        <PayDatesOverview payDates={bonusDates} />
      ) : (
        <p>{noBonusDatesLeft}</p>
      )}
      <CSVLink
        data={payDates}
        headers={headers}
        filename={"payment-dates-report.csv"}
      >
        <h1 className={styles.downloadLink}>Download Excel</h1>
      </CSVLink>
    </Container>
  );
};

export default PayDatesMain;
