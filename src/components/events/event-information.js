import React from 'react';
import * as styles from './event-information.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';
const EventInformation = ({ eventDescription, gatsbyImage, ...props }) => {
  return (
    <div className={styles.eventInformationContainer}>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{
          __html: eventDescription,
        }}
      />

      {gatsbyImage && (
        <GatsbyImage
          alt='Danny Playing Saxophone'
          className={styles.gatsbyImage}
          image={gatsbyImage.gatsbyImageData}
        />
      )}
    </div>
  );
};

export default EventInformation;
