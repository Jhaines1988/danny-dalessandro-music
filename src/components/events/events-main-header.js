import React from 'react';
import * as styles from './events-main-header.module.css';
const EventsMainHeader = ({ header }) => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.eventsMainHeader}>{header}</h1>
    </div>
  );
};

export default EventsMainHeader;
