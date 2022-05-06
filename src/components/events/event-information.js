import React from 'react';
import * as styles from './event-information.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';
const EventInformation = ({
  eventDescription,
  cloudinaryImage,
  gatsbyImage,
  ...props
}) => {
  console.log(cloudinaryImage);
  return (
    <div className={styles.eventInformationContainer}>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{
          __html: eventDescription,
        }}
      />
      {/* {gatsbyImage && (
        <GatsbyImage
          className={styles.gatsbyImage}
          image={gatsbyImage.gatsbyImageData}
        />
      )} */}
      <div>
        {cloudinaryImage &&
          cloudinaryImage.map((image, i) => (
            <img
              className={styles.cloudinaryImage}
              src={image.secure_url}
              key={i}
            />
          ))}
      </div>
    </div>
  );
};

export default EventInformation;
