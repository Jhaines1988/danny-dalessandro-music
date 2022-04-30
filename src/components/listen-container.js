import React from 'react';
import BandContainer from './band-container';
import * as styles from './listen-container.module.css';
const ListenContainer = function ({ bands }) {
  console.log(bands);
  return (
    <div className={styles.bandContainer}>
      {bands.map((bandNode, i) => {
        return (
          <BandContainer
            bandName={bandNode.node.band.bandName}
            tags={bandNode.node.tags}
            url={bandNode.node.url}
          />
        );
      })}
    </div>
  );
};

export default ListenContainer;
