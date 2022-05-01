import React from 'react';
import Iframe from './Iframe';
import * as styles from './band-container.module.css';
const BandContainer = function ({ bandName, musicVideo, ...props }) {
  return (
    <>
      <label className={styles.label}>{bandName}</label>
      <div className={styles.bandContainer}>
        {musicVideo &&
          musicVideo.map((video, i) => {
            return (
              <>
                <Iframe
                  className={styles.video}
                  videoURL={video.url}
                  tags={video.tags}
                />
                <div
                  className='body'
                  dangerouslySetInnerHTML={{
                    __html: video.description.childMarkdownRemark.html,
                  }}
                />
              </>
            );
          })}
      </div>
    </>
  );
};

export default BandContainer;
