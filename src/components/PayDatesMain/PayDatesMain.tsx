import { CSVLink } from "react-csv";
import React from "react";
import { useEffect, useState } from "react";

import Container from "@components/UI/Container/Container";
import PayDatesOverview from "./PayDatesOverview/PayDatesOverview";
import type { Props } from "./PayDatesMain.types";

const PayDatesMain = ({
  bonusDates,
  salaryDates,
  noBonusDatesLeft,
  noSalaryDatesLeft,
}: Props) => {
  const [payDates, setPayDates] = useState({
    month: "",
    salaryDate: "",
    bonusDate: "",
  });

  // const [salaryDates, setSalaryDates] = useState<(Date | undefined)[]>();
  // const [bonusDates, setBonusDates] = useState<(Date | undefined)[]>();

  //setOtp({ ...otp, 2: text });

  const headers = [
    { label: "Month", key: "month" },
    { label: "Salary Payment Date", key: "salaryDate" },
    { label: "Bonus Payment Date", key: "bonusDate" },
  ];

  /**
   * BLA BLA
   */
  // useEffect(() => {
  //   if (salaryDates && bonusDates) {
  //     const result = [salaryDates, payDates].reduce((a, b) =>
  //       a!.map((c, i) => Object.assign({}, c, b![i]))
  //     );
  //     console.log(result, "YURI");
  //   }
  // }, [salaryDates, bonusDates]);

  // const data = [
  //   { month: "September", salarydate: "31-09-2022", bonusdate: "15-09-2022" },
  //   { month: "October", salarydate: "31-10-2022", bonusdate: "15-10-2022" },
  // ];

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
      {/* <CSVLink
        data={data}
        headers={headers}
        filename={"payment-dates-report.csv"}
      >
        Download Excel
      </CSVLink> */}
    </Container>
  );
};

export default PayDatesMain;
