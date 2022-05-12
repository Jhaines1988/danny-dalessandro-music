import React from 'react';
import * as styles from './events-main-header.module.css';

const EventsMainHeader = ({ header }) => {
  // hacky way to split up header in smaller screens...
  const split = header.split('.');

  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.eventsMainHeader}>
        {header}
        {/* <p> {split[0] + '.'} </p>

<p> {split[1] + '.'}</p>

<p> {split[2] + '.'}</p> */}
      </h1>
    </div>
  );
};

export default EventsMainHeader;
