import {
  BonusDate,
  SalaryDate,
} from "./PayDatesOverview/PayDatesOverview.types";

export interface Props {
  /**
   * Array of bonus payment dates
   */
  bonusDates?: BonusDate[] | undefined;
  /**
   * Short description about no bonus dates left
   */
  noBonusDatesLeft: string;
  /**
   * Short description about no salary dates left
   */
  noSalaryDatesLeft: string;
  /**
   * Array of base salary and bonus dates
   */
  payDates?: (BonusDate | SalaryDate)[] | undefined;
  /**
   * Array of base salary payment dates
   */
  salaryDates?: SalaryDate[] | undefined;
}
