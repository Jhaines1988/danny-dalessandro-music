import React from 'react';
import * as styles from './event-information.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';
const EventInformation = ({
  eventDescription,
  cloudinaryImage,
  gatsbyImage,
  ...props
}) => {
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
          alt=''
          className={styles.gatsbyImage}
          image={gatsbyImage.gatsbyImageData}
        />
      )}
    </div>
  );
};

export default EventInformation;
