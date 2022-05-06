import React from 'react';
import * as styles from './events-main-header.module.css';

const EventsMainHeader = ({ header }) => {
  return <h1 className={styles.eventsMainHeader}>{header}</h1>;
};

export default EventsMainHeader;
