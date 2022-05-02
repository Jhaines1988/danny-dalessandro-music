import React from 'react';
import * as styles from './inspired-text-blurb.module.css';

const InspiredText = ({ text }) => {
  return (
    <div
      className={styles.body}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
};

export default InspiredText;
