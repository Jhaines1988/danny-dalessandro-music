import React from 'react';
import { graphql } from 'gatsby';
import VideoBanner from '../components/videobanner';
import ListenContainer from '../components/listen-container';
const ListenPage = ({ data }) => {
  const bands = data.allContentfulVideoPost.edges;

  return (
    <>
      <VideoBanner />
      <ListenContainer bands={bands} />
    </>
  );
};

export default ListenPage;

export const query = graphql`
  {
    allContentfulVideoPost(sort: { fields: band___id }) {
      edges {
        node {
          band {
            bandName
          }
          tags
          url
        }
      }
    }
  }
`;
