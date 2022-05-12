import React from 'react';
import * as styles from './events-container.module.css';

const EventsContainer = (props) => {
  return <div className={styles.eventsContainer}> {props.children}</div>;
};

export default EventsContainer;
