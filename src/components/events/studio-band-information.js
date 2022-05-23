import React from 'react';
import * as styles from './studio-band-information.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import NavButton from './internal-nav-buttons';
const StudioBandInformation = ({ eventDescription, gatsbyImage, ...props }) => {
  const data = useStaticQuery(graphql`
    {
      allContentfulEventInformation(
        filter: { order: { gte: 2 } }
        sort: { fields: order }
      ) {
        edges {
          node {
            id
            description {
              childMarkdownRemark {
                html
              }
            }
            gatsbyImage {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: TRACED_SVG
                width: 600

                formats: AUTO
              )
            }
          }
        }
      }
    }
  `);

  const [studioInformation, bandInformation] =
    data.allContentfulEventInformation.edges;

  const studioHtml =
    studioInformation.node.description.childMarkdownRemark.html;
  const studioBandImage = studioInformation.node.gatsbyImage.gatsbyImageData;
  const bandHtml = bandInformation.node.description.childMarkdownRemark.html;

  return (
    <div className={styles.studioBandContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.studioContainer}>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{
              __html: studioHtml,
            }}
          />
          <NavButton text='Contact' page='/contact' />
        </div>
        <div className={styles.bandContainer}>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{
              __html: bandHtml,
            }}
          />
          <NavButton text='Listen' page='/listen' />
        </div>
      </div>
      {studioBandImage && (
        <GatsbyImage
          alt=''
          className={styles.gatsbyImage}
          image={studioBandImage}
        />
      )}
    </div>
  );
};

export default StudioBandInformation;
