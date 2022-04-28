import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import { BgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import * as styles from './gbi-bridged.module.css';
const GbiBridged = function (props) {
  const { BackgroundImageHero } = useStaticQuery(
    graphql`
      query {
        BackgroundImageHero: file(
          relativePath: { eq: "colorful-sax-hero.jpg" }
        ) {
          id
          childImageSharp {
            gatsbyImageData(
              width: 2000
              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  );

  const pluginImage = getImage(BackgroundImageHero);

  return (
    <BgImage
      alt="Danny D'Alessandro"
      ariaLabel="Danny D'Alessandro"
      image={pluginImage}
      className={styles.backgroundHeroImage}>
      {props.children}
    </BgImage>
  );
};

export default GbiBridged;
