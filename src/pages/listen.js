import React from 'react';
import { graphql } from 'gatsby';
import ListenContainer from '../components/listen/listen-container';
import Layout from '../components/layout';

const ListenPage = ({ data }) => {
  const bands = data.allContentfulBand.edges;

  return (
    <Layout title="Danny D'Alessandro | Listen">
      <ListenContainer bands={bands} />
    </Layout>
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
  }
`;
