
import React from 'react';
import styles from "./statistics.module.css"
import PropTypes from "prop-types";

function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
}
    
export const Statistics = ({ title, stats }) => {
    return <section className={styles.statistics}>
        {title && <h2 className="title">{title}</h2>}
        <ul className={styles.statList}>
            {stats.map(({id,label,percentage}) => <li className={styles.item} style={{ backgroundColor:getRandomColor() }} key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>) 
            }
  </ul>
</section>
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};