
import React from 'react';
import styles from "./statistics.module.css"
import PropTypes from "prop-types";
import { StatisticsItem } from "./statisticsItem"
import getRandomInt from "../compileid"

export const Statistics = ({ title, stats }) => {
    return <section className={styles.statistics}>
        {title && <h2 className="title">{title}</h2>}
        <ul className={styles.statList}>
        {stats.map((stat) => {
          // console.log("stats",stat)
          return <StatisticsItem stats={stat} key={getRandomInt()}/>
          
        })}
            
  </ul>
</section>
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};