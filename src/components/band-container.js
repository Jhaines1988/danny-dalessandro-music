import React from 'react';
import Iframe from './Iframe';
import * as styles from './band-container.module.css';
const BandContainer = function ({ bandName, tags, url, ...props }) {
  return (
    <div className={styles.bandContainer}>
      <Iframe videoURL={url} tags={tags} />
    </div>
  );
};

export default BandContainer;
