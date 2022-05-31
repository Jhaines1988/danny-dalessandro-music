import React from 'react';
import { graphql } from 'gatsby';
import AboutLayout from '../components/about/about-layout';
import HeroContainer from '../components/about/hero-container';
const AboutPage = ({ data }) => {
  const aboutData = data.allContentfulMusician.nodes[0];
  const mainHeader = aboutData.mainHeader;
  const bioText = aboutData.bio.childMarkdownRemark.html;
  const heroImage =
    aboutData.heroImage.childContentfulHeroImagesHeroJsonNode.secure_url;

  return (
    <AboutLayout title="Danny D'Alessandro | About">
      <HeroContainer
        headerText={mainHeader}
        hero={heroImage}
        bioText={bioText}
      />
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
  }
`;
