import React from 'react';
import styles from "./statistics.module.css"
import PropTypes from "prop-types";

export const StatisticsItem = ({ stats: { id,label,percentage} }) => {
    return <li className={styles.item} style={{ backgroundColor:getRandomColor() }} key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
}
 function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
}
StatisticsItem.propTypes = {
  stats: PropTypes.object.isRequired,
  // stats: PropTypes.objectOf(
  //   PropTypes.shape({
  //     id: PropTypes.string,
  //     label: PropTypes.string,
  //     percentage: PropTypes.number,
  //   })
  // ),
};