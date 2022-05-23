import React from 'react';

import * as styles from './event-extras.module.css';
import NavButton from './internal-nav-buttons';
const EventsExtras = ({ eventExtrasText }) => {
  return (
    <div className={styles.eventsExtrasContainer}>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{
          __html: eventExtrasText,
        }}
      />
      <NavButton text='Contact' page='/contact' />
    </div>
  );
};

export default EventsExtras;
