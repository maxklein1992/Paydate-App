import { CSVLink } from "react-csv";
import React from "react";

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
    <div>
      <h4 className={styles.header}>{salaryPaymentDates}</h4>
      {salaryDates ? (
        <PayDatesOverview payDates={salaryDates} />
      ) : (
        <p>{noSalaryDatesLeft}</p>
      )}
      <h4 className={styles.header}>{bonusPaymentDates}</h4>
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
          <h4 className={styles.downloadLink}>{downloadExcel}</h4>
        </CSVLink>
      )}
    </div>
  );
};

export default PayDatesMain;
