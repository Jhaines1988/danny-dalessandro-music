import React from 'react';
import BandContainer from './band-container';
import * as styles from './listen-container.module.css';
const ListenContainer = function ({ bands }) {
  return (
    <div className={styles.listenContainer}>
      {bands.map((bandNode, i) => {
        return (
          <BandContainer
            key={i}
            bandName={bandNode.node.bandName}
            bandURL={bandNode.node.bandUrl}
            musicVideo={bandNode.node.musicVideo}
          />
        );
      })}
    </div>
  );
};

export default ListenContainer;
