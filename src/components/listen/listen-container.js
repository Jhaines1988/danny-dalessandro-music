import React from 'react';
import BandContainer from './band-container';
import * as styles from './listen-container.module.css';
const ListenContainer = function ({ bands }) {
  return (
    <div className={styles.listenContainer}>
      {/* <h1 className={styles.mainHeader}>
        Danny performs with a handful of different bands around southwest
        Colorado. The music spans a multitude of genres and includes a lot of
        original works as well. Anyways, here's wonderwall.
      </h1> */}
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
