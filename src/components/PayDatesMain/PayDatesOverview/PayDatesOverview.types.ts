export interface Props {
  /**
   * Array of payment dates
   */
  payDates: (SalaryDate | BonusDate)[];
}

export interface SalaryDate {
  /**
   * Payment month
   */
  month: string;
  /**
   * Payment date
   */
  salaryDate: number;
  /**
   * Salary type
   */
  variant: "salary" | "bonus";
}

export interface BonusDate {
  /**
   * Payment date
   */
  bonusDate: number;
  /**
   * Payment month
   */
  month: string;
  /**
   * Salary type
   */
  variant: "salary" | "bonus";
}
