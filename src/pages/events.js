import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import EventInformation from '../components/events/event-information';
import EventsMainHeader from '../components/events/events-main-header';
import EventsExtras from '../components/events/event-extras';
const EventsPage = ({ data }) => {
  const mainHeader = data.contentfulEventsPageMainHeader.header;
  const eventDescriptionNodes = data.allContentfulEventInformation.edges;
  const eventExtrasText =
    data.contentfulEventsExtras.description.childMarkdownRemark.html;

  console.log(eventDescriptionNodes);
  return (
    <Layout>
      <EventsMainHeader header={mainHeader} />
      {eventDescriptionNodes.map((descriptionNode, i) => (
        <EventInformation
          key={i}
          eventDescription={
            descriptionNode.node.description.childMarkdownRemark.html
          }
          cloudinaryImage={descriptionNode.node.cloudinaryImage}
          gatsbyImage={descriptionNode.node.gatsbyImage}
        />
      ))}
      <EventsExtras eventExtrasText={eventExtrasText} />
    </Layout>
  );
};
export const query = graphql`
  {
    contentfulEventsPageMainHeader(isMainHeader: { eq: true }) {
      header
    }
    allContentfulEventInformation(filter: { isIncluded: { eq: true } }) {
      edges {
        node {
          description {
            childMarkdownRemark {
              html
            }
          }
          cloudinaryImage {
            secure_url
          }
          gatsbyImage {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 400
              placeholder: TRACED_SVG
              formats: AUTO
            )
          }
        }
      }
    }
    contentfulEventsExtras(isIncluded: { eq: true }) {
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
export default EventsPage;
