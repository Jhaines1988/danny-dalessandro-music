import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import * as styles from './gbi-bridged.module.css';
const GbiBridged = function ({ ...props }) {
  const data = useStaticQuery(graphql`
    {
      contentfulBackgroundImages(collectionName: { eq: "Contact-Background" }) {
        backgroundImage {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const image = props.image
    ? getImage(props.image)
    : getImage(data.contentfulBackgroundImages.backgroundImage);
  // const image = getImage(data.contentfulHeroImages.gatsbyHero);
  return (
    <BgImage
      alt="Danny D'Alessandro"
      ariaLabel="Danny D'Alessandro"
      image={image}
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
      }}
      className={styles.backgroundHeroImage}>
      {props.children}
    </BgImage>
  );
};

export default GbiBridged;
