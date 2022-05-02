import React from 'react';
import * as styles from './about-bio.module.css';
const AboutBio = ({ bioText }) => {
  return (
    <div
      className={styles.body}
      dangerouslySetInnerHTML={{
        __html: bioText,
      }}
    />
  );
};

export default AboutBio;
