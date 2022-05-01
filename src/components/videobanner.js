import React from 'react';
import RecordMp4 from '../video/Record - 65387.mp4';
import RecordwebM from '../video/Record-65387.webm';
import * as styles from './video-banner.module.css';
const VideoBanner = function () {
  return (
    <video
      className={styles.video}
      //   width='1280px'
      //   height='444'
      autoPlay
      muted
      loop>
      <source src={RecordwebM} type='video/webm' />
      <source src={RecordMp4} type='video/mp4' />
    </video>
  );
};

export default VideoBanner;
