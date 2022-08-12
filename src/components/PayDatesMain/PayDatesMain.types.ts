import {
  BonusDate,
  PayDate,
  SalaryDate,
} from "./PayDatesOverview/PayDatesOverview.types";

export interface Props {
  /**
   * Array of bonus payment dates
   */
  bonusDates?: BonusDate[] | undefined;
  /**
   * Text
   */
  bonusPaymentDates: string;
  /**
   * Text
   */
  downloadExcel: string;
  /**
   * Text
   */
  noBonusDatesLeft: string;
  /**
   * Text
   */
  noSalaryDatesLeft: string;
  /**
   * Array of base salary and bonus dates
   */
  payDates?: PayDate[] | undefined;
  /**
   * Array of base salary payment dates
   */
  salaryDates?: SalaryDate[] | undefined;
  /**
   * Text
   */
  salaryPaymentDates: string;
}
