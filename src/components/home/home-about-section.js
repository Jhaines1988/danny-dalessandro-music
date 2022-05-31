import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './home-about-section.module.css';
import { navigate } from 'gatsby';
export default function HomeAboutSection(props) {
  const data = useStaticQuery(graphql`
    {
      allContentfulHeroImages(filter: { isHomePageHero: { eq: true } }) {
        edges {
          node {
            gatsbyHero {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 600
                placeholder: BLURRED
                aspectRatio: 1
              )
            }
          }
        }
      }
    }
  `);
  const imageNodes = data.allContentfulHeroImages.edges;
  const [image1, image2] = imageNodes;
  const image1Source = image1.node.gatsbyHero.gatsbyImageData;
  const image2Source = image2.node.gatsbyHero.gatsbyImageData;

  return (
    <div className={styles.homeAboutContainer}>
      <div className={styles.homeAboutContent}>
        <GatsbyImage
          alt='Danny Playing Banjo'
          image={image1Source}
          className={styles.gatsbyImages1}
        />
        <GatsbyImage
          alt='Danny Playing Sax'
          image={image2Source}
          className={styles.gatsbyImages2}
        />

        <p className={styles.homeAboutText}>
          Danny D’Alessandro is a musician based out of Telluride, CO. His
          unique choice of instrumentation showcases his versatility. He draws
          influence from numerous genres and playing styles making him an asset
          to any project.
        </p>
        <button
          className={styles.homeAboutButton}
          onClick={() => {
            navigate('/about');
          }}>
          About Danny
        </button>
      </div>
    </div>
  );
}
