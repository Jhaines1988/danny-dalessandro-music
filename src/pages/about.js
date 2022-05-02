import React from 'react';
import { graphql } from 'gatsby';
import AboutHeader from '../components/about/about-bio-header';
import AboutBio from '../components/about/about-bio';
import AboutHero from '../components/about/about-hero';
import AboutLayout from '../components/about/about-layout';
import InspiredContainer from '../components/about/inspired-container';
const AboutPage = ({ data }) => {
  const aboutData = data.allContentfulMusician.nodes[0];
  const bioText = aboutData.bio.childMarkdownRemark.html;
  const heroImage = aboutData.heroImage.hero.gatsbyImageData;
  const inspiredData = data.allContentfulInspiredText.nodes;
  console.log('about', inspiredData);
  return (
    <AboutLayout>
      <AboutHeader headerText='About Danny' />
      <AboutBio bioText={bioText} />
      <AboutHero hero={heroImage} />
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
    allContentfulInspiredText(sort: { fields: description___id }) {
      nodes {
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
