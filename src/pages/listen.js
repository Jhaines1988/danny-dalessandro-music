import React from 'react';
import { graphql } from 'gatsby';
import VideoBanner from '../components/videobanner';
import ListenContainer from '../components/listen-container';
import Layout from '../components/layout';
const ListenPage = ({ data }) => {
  const bands = data.allContentfulBand.edges;

  return (
    <Layout>
      <VideoBanner />
      <ListenContainer bands={bands} />
    </Layout>
  );
};

export default ListenPage;

export const query = graphql`
  {
    allContentfulBand(sort: { fields: contentful_id }) {
      edges {
        node {
          bandName
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
  }
`;
