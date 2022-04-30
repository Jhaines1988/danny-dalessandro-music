import React from 'react';
import RecordMp4 from '../video/Record - 65387.mp4';
import RecordwebM from '../video/Record-65387.webm';
const VideoBanner = function () {
  return (
    <video
      style={{
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        position: 'fixed',

        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
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
