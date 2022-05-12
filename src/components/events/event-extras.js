import React from 'react';
import * as styles from './event-extras.module.css';
const EventsExtras = ({ eventExtrasText }) => {
  return (
    <div className={styles.eventsExtrasContainer}>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{
          __html: eventExtrasText,
        }}
      />
    </div>
  );
};

export default EventsExtras;
