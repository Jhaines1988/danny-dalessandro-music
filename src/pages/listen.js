import React from 'react';
import { graphql } from 'gatsby';
import VideoBanner from '../components/videobanner';
import ListenContainer from '../components/listen-container';
const ListenPage = ({ data }) => {
  const bands = data.allContentfulBand.edges;

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
    allContentfulBand {
      edges {
        node {
          bandName
          musicVideo {
            title
            url
            tags
          }
        }
      }
    }
  }
`;
