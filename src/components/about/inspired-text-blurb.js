import React from 'react';
import ImageCarousel from '../image-carousel';
import * as styles from './inspired-text-blurb.module.css';

const InspiredText = ({ text, cloudinaryImages, ...props }) => {
  return (
    <>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
      <ImageCarousel cloudinaryImages={cloudinaryImages} />
    </>
  );
};

export default InspiredText;
