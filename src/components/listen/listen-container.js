import React from 'react';
import BandContainer from './band-container';
import * as styles from './listen-container.module.css';
const ListenContainer = function ({ bands }) {
  return (
    <div className={styles.listenContainer}>
      <h1 className={styles.mainHeader}>
        {' '}
        Danny is a guy who writes things and plays other things. he can do a lot
        of stuff with his hands{' '}
      </h1>
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
