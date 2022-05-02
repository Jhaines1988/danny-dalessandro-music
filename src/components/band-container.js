import React from 'react';
import Iframe from './Iframe';
import * as styles from './band-container.module.css';
const BandContainer = function ({ bandName, musicVideo, ...props }) {
  console.log(musicVideo[musicVideo.length - 1]);

  return (
    <>
      <label className={styles.label}>{bandName}</label>
      <div className={styles.bandContainer}>
        {musicVideo &&
          musicVideo.map((video, i) => {
            const oddVids = musicVideo.length % 2 !== 0;

            return (
              <div
                className={styles.iframeContainer}
                id={oddVids && i === musicVideo.length - 1 ? styles.odd : null}>
                <Iframe videoURL={video.url} tags={video.tags} />
                {/* <div
                  className='body'
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
//
