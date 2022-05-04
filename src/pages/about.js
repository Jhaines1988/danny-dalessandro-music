import React from 'react';
import { graphql } from 'gatsby';
import AboutHeader from '../components/about/about-bio-header';
import AboutBio from '../components/about/about-bio';
import AboutHero from '../components/about/about-hero';
import AboutLayout from '../components/about/about-layout';
import InspiredContainer from '../components/about/inspired-container';

const AboutPage = ({ data }) => {
  const aboutData = data.allContentfulMusician.nodes[0];
  const mainHeader = aboutData.mainHeader;
  const bioText = aboutData.bio.childMarkdownRemark.html;
  const heroImage = aboutData.heroImage.hero.gatsbyImageData;
  const inspiredData = data.allContentfulInspiredText.nodes;

  return (
    <AboutLayout>
      <AboutHeader headerText={mainHeader} />
      <AboutHero hero={heroImage} />
      <AboutBio bioText={bioText} />
      <AboutHeader headerText='Inspired By...' as='h2' />
      <InspiredContainer inspiredTextArray={inspiredData} />
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
          hero {
            gatsbyImageData(layout: FULL_WIDTH)
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
