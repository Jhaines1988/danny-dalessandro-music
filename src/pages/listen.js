import React from 'react';
import { graphql } from 'gatsby';
// import VideoBanner from '../components/listen/videobanner';
import ListenContainer from '../components/listen/listen-container';
import Layout from '../components/layout';
// import GbiBridged from '../components/background/gbi-bridged';
const ListenPage = ({ data }) => {
  const bands = data.allContentfulBand.edges;
  const image = data.contentfulBackgroundImages.backgroundImage;
  return (
    // <GbiBridged image={image}>
    <Layout>
      {/* <VideoBanner /> */}
      <ListenContainer bands={bands} />
    </Layout>
    // </GbiBridged>
  );
};

export default ListenPage;

export const query = graphql`
  {
    allContentfulBand(sort: { fields: order, order: ASC }) {
      edges {
        node {
          bandName
          bandUrl
          musicVideo {
            title
            url
            tags
            description {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
    contentfulBackgroundImages(collectionName: { eq: "Listen-Background" }) {
      backgroundImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
      }
    }
  }
`;
