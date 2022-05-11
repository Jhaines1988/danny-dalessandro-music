import React from 'react';
import { graphql } from 'gatsby';

import AboutLayout from '../components/about/about-layout';
// import InspiredContainer from '../components/about/inspired-container';
import HeroContainer from '../components/about/hero-container';
const AboutPage = ({ data }) => {
  const aboutData = data.allContentfulMusician.nodes[0];
  const mainHeader = aboutData.mainHeader;
  const bioText = aboutData.bio.childMarkdownRemark.html;
  const heroImage =
    aboutData.heroImage.childContentfulHeroImagesHeroJsonNode.secure_url;
  // const inspiredData = data.allContentfulInspiredText.nodes;

  return (
    <AboutLayout>
      <HeroContainer
        headerText={mainHeader}
        hero={heroImage}
        bioText={bioText}
      />
      {/*
      <AboutHeader headerText='Inspired By...' as='h2' />
      <InspiredContainer inspiredTextArray={inspiredData} /> */}
    </AboutLayout>
  );
};

export default AboutPage;
export const query = graphql`
  {
    allContentfulMusician(filter: { isDanny: { eq: true } }) {
      nodes {
        mainHeader
        bio {
          childMarkdownRemark {
            html
          }
        }
        heroImage {
          isAboutHero
          childContentfulHeroImagesHeroJsonNode {
            secure_url
          }
        }
      }
    }
    allContentfulInspiredText(
      sort: { fields: description___id }
      filter: { isIncluded: { eq: true } }
    ) {
      nodes {
        category
        description {
          childMarkdownRemark {
            html
          }
        }
        images {
          childrenContentfulCarouselImagesCloudinaryCarouselJsonNode {
            secure_url
          }
        }
      }
    }
  }
`;
