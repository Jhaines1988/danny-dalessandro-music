import React from 'react';
import Iframe from './Iframe';
import * as styles from './band-container.module.css';
const BandContainer = function ({ bandName, musicVideo, ...props }) {
  return (
    <>
      <h1 className={styles.heading}>{bandName}</h1>
      <div className={styles.bandContainer}>
        {musicVideo &&
          musicVideo.map((video, i) => {
            return (
              <Iframe
                className={styles.video}
                videoURL={video.url}
                tags={video.tags}
              />
            );
          })}
      </div>
    </>
  );
};

export default BandContainer;
