import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import EventInformation from '../components/events/event-information';
import EventsMainHeader from '../components/events/events-main-header';
import EventsExtras from '../components/events/event-extras';
import EventsContainer from '../components/events/events-container';
import EventsLayout from '../components/events/events-layout';
const EventsPage = ({ data }) => {
  const mainHeader = data.contentfulEventsPageMainHeader.header;
  const eventDescriptionNodes = data.allContentfulEventInformation.edges;
  const eventExtrasText =
    data.contentfulEventsExtras.description.childMarkdownRemark.html;
  return (
    <EventsLayout header={mainHeader}>
      <EventsContainer>
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
      </EventsContainer>
    </EventsLayout>
  );
};

export const query = graphql`
  {
    contentfulEventsPageMainHeader(isMainHeader: { eq: true }) {
      header
    }
    allContentfulEventInformation(
      filter: { isIncluded: { eq: true } }
      sort: { fields: order }
    ) {
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
              width: 600
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
