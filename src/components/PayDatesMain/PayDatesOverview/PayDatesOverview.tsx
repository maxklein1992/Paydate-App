import { createRef, useRef } from "react";
import React from "react";

import styles from "./PayDatesOverview.module.scss";
import type { BonusDate, SalaryDate, Props } from "./PayDatesOverview.types";

const PayDatesOverview = ({ payDates }: Props) => {
  const refItems = useRef(payDates!.map(() => createRef<HTMLDivElement>()));

  // Defensive
  if (payDates === undefined) return null;

  /**
   * Keyboard support (for a11y)
   */
  const handleKeyboardSupport = (
    // @ts-ignore @todo
    event: KeyboardEvent<HTMLDivElement>
  ) => {
    if (
      event.code === "ArrowDown" ||
      event.code === "ArrowUp" ||
      event.code === "ArrowLeft" ||
      event.code === "ArrowRight"
    ) {
      event.preventDefault();
      const payDateItems = refItems.current.map((item) => item.current);
      const itemIndexIsFocused = Array.prototype.indexOf.call(
        payDateItems,
        document.activeElement
      );
      const firstItem = payDateItems[0];
      const lastItem = payDateItems[payDateItems.length - 1];

      switch (event.code) {
        case "ArrowDown":
        case "ArrowRight":
          if (lastItem !== document.activeElement) {
            payDateItems[itemIndexIsFocused + 1]?.focus();
          }
          break;
        case "ArrowUp":
        case "ArrowLeft":
          if (firstItem !== document.activeElement) {
            payDateItems[itemIndexIsFocused - 1]?.focus();
          }
          break;
      }
    }
  };

  /**
   * Render bonus payment date item
   */
  const renderBonusDateItem = (payDateItem: BonusDate, i: number) => (
    <div
      tabIndex={0}
      className={styles.item}
      key={i}
      ref={refItems.current[i]}
      onKeyDown={handleKeyboardSupport}
      role="presentation"
    >
      <h2>{`${payDateItem.bonusDate} ${payDateItem.month}`}</h2>
    </div>
  );

  /**
   * Render salary payment date item
   */
  const renderSalaryDateItem = (payDateItem: SalaryDate, i: number) => (
    <div
      tabIndex={0}
      className={styles.item}
      key={i}
      ref={refItems.current[i]}
      onKeyDown={handleKeyboardSupport}
      role="presentation"
    >
      <h2>{`${payDateItem.salaryDate} ${payDateItem.month}`}</h2>
    </div>
  );

  return (
    <ul className={styles.grid}>
      {payDates.map((payDateItem, i) => (
        <li key={i} className={styles.column}>
          {payDateItem.variant === "salary"
            ? renderSalaryDateItem(payDateItem as SalaryDate, i)
            : renderBonusDateItem(payDateItem as BonusDate, i)}
        </li>
      ))}
    </ul>
  );
};

export default PayDatesOverview;
