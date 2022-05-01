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
            bandName={bandNode.node.bandName}
            musicVideo={bandNode.node.musicVideo}
          />
        );
      })}
    </div>
  );
};

export default ListenContainer;
