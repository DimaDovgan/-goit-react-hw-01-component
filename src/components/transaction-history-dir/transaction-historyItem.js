import React from 'react';
import styles from "./transaction-history.module.css"
import PropTypes from "prop-types";
export const TransactionHistoryItem = ({item:{id,type,amount,currency}}) => { 
    return <tr key={id}>
      <td className={styles.tab}>{type}</td>
      <td className={styles.tab}>{amount}</td>
      <td className={styles.tab}>{currency}</td>
    </tr>
}
TransactionHistoryItem.propTypes = {
    item: PropTypes.objectOf(
    PropTypes.string.isRequired,
  ),

}