import React from 'react';
import styles from "./transaction-history.module.css"
import PropTypes from "prop-types";

export const TransactionHistory = ({items}) => {
  return<table className={styles.transactionHistory}>
    <thead>
    <tr>
      <th className={styles.tab}>Type</th>
      <th className={styles.tab}>Amount</th>
      <th className={styles.tab}>Currency</th>
    </tr>
    </thead>
    <tbody>
    {items.map(({ id, type, amount, currency }) => {
    return <tr key={id}>
      <td className={styles.tab}>{type}</td>
      <td className={styles.tab}>{amount}</td>
      <td className={styles.tab}>{currency}</td>
    </tr>
    })}
  </tbody>
</table>
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

