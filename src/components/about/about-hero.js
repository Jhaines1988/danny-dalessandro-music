import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './about-hero.module.css';
import { graphql, useStaticQuery } from 'gatsby';

const AboutHero = ({ hero }) => {
  const data = useStaticQuery(graphql`
    {
      contentfulMusician(isDanny: { eq: true }) {
        heroImage {
          gatsbyHero {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }
  `);
  // Hero = Cloudinary data
  const image = data.contentfulMusician.heroImage.gatsbyHero.gatsbyImageData;
  return (
    // <div className={styles.imageContainer}>
    // <img src={hero} className={styles.heroImage} />
    <GatsbyImage image={image} className={styles.heroImage} />
    // </div>
  );
};
{
  /* <GbiBridged image={image} /> */
}
export default AboutHero;
