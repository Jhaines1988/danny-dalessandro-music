import React from 'react';
import * as styles from './about-bio.module.css';
const AboutBio = ({ bioText }) => {
  return (
    <div className={styles.aboutBioContainer}>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{
          __html: bioText,
        }}
      />
    </div>
  );
};

export default AboutBio;
