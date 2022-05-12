import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import * as styles from './gbi-bridged.module.css';
const GbiBridged = function ({ ...props }) {
  const data = useStaticQuery(graphql`
    {
      contentfulHeroImages(isHomePageHero: { eq: true }) {
        id
        gatsbyHero {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
        }
      }
    }
  `);

  const image = getImage(data.contentfulHeroImages.gatsbyHero);
  return (
    <BgImage
      alt="Danny D'Alessandro"
      ariaLabel="Danny D'Alessandro"
      image={image}
      style={props.style ? props.style : null}
      className={props.style ? null : styles.backgroundHeroImage}>
      {props.children}
    </BgImage>
  );
};

export default GbiBridged;
