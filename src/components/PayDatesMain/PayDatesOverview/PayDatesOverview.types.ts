export interface Props {
  /**
   * Array of payment dates
   */
  payDates: (SalaryDate | BonusDate)[];
}

export enum Month {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

export interface SalaryDate {
  /**
   * Payment month
   */
  month: Month;
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
  month: Month;
  /**
   * Salary type
   */
  variant: "salary" | "bonus";
}

export interface PayDate {
  /**
   * Payment date
   */
  bonusDate: number;
  /**
   * Payment month
   */
  month: Month;
  /**
   * Payment date
   */
  salaryDate: number;
}
