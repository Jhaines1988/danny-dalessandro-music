import React from 'react';
import * as styles from './events-main-header.module.css';

const EventsMainHeader = ({ header }) => {
  // hacky way to split up header in smaller screens...
  const split = header.split('.');

  return (
    <h1 className={styles.eventsMainHeader}>
      {/* {header} */}
      <p> {split[0] + '.'} </p>

      <p> {split[1] + '.'}</p>

      <p> {split[2] + '.'}</p>
    </h1>
  );
};

export default EventsMainHeader;
