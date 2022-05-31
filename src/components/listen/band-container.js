import React from 'react';
import Iframe from './Iframe';
import * as styles from './band-container.module.css';
const BandContainer = function ({ bandName, bandURL, musicVideo, ...props }) {
  return (
    <>
      <div className={styles.bandContainer}>
        <label className={styles.label}>{bandName}</label>
        {bandURL && (
          <a className={styles.bandLink} href={bandURL}>
            ABOUT THE BAND
          </a>
        )}
        {musicVideo &&
          musicVideo.map((video, i) => {
            return (
              <div key={i} className={styles.iframeContainer}>
                <Iframe videoURL={video.url} tags={video.tags} />

                {/* note: If user wants to add  description in the future,
               markdown is accesible with below code:
               <div
                   className={styles.body}
                   dangerouslySetInnerHTML={{
                     __html: video.description.childMarkdownRemark.html,
                   }}
                 /> */}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default BandContainer;
