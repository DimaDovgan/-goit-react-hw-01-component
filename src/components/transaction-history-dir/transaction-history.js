import React from 'react';
import styles from "./transaction-history.module.css"
import PropTypes from "prop-types";
import { TransactionHistoryItem } from "./transaction-historyItem"
import getRandomInt from "../compileid"

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
      {items.map((item) => {
        return <TransactionHistoryItem item={item} key={getRandomInt()}/>
    })}
  </tbody>
</table>
}
TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

