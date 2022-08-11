import { CSVLink } from "react-csv";
import React from "react";

import Container from "../UI/Container/Container";
import PayDatesOverview from "./PayDatesOverview/PayDatesOverview";
import styles from "./PayDatesMain.module.scss";
import type { Props } from "./PayDatesMain.types";

const PayDatesMain = ({
  bonusDates,
  downloadExcel,
  noBonusDatesLeft,
  noSalaryDatesLeft,
  payDates,
  bonusPaymentDates,
  salaryDates,
  salaryPaymentDates,
}: Props) => {
  // Defensive
  if (payDates === undefined) return null;

  const headers = [
    { label: "Month", key: "month" },
    { label: "Salary Payment Date", key: "salaryDate" },
    { label: "Bonus Payment Date", key: "bonusDate" },
  ];

  return (
    <Container as="section">
      <h2>{salaryPaymentDates}</h2>
      {salaryDates ? (
        <PayDatesOverview payDates={salaryDates} />
      ) : (
        <p>{noSalaryDatesLeft}</p>
      )}
      <h2>{bonusPaymentDates}</h2>
      {bonusDates ? (
        <PayDatesOverview payDates={bonusDates} />
      ) : (
        <p>{noBonusDatesLeft}</p>
      )}
      {payDates && (
        <CSVLink
          data={payDates}
          headers={headers}
          filename={"payment-dates-report.csv"}
        >
          <h1 className={styles.downloadLink}>{downloadExcel}</h1>
        </CSVLink>
      )}
    </Container>
  );
};

export default PayDatesMain;
