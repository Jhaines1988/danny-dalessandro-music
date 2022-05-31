import React from 'react';
import { graphql } from 'gatsby';

import EventsLayout from '../components/events/events-layout';
import EventsContainer from '../components/events/events-container';
import EventInformation from '../components/events/event-information';
import StudioBandInformation from '../components/events/studio-band-information';
import EventsExtras from '../components/events/event-extras';
const EventsPage = ({ data }) => {
  const mainHeader = data.contentfulEventsPageMainHeader.header;
  const eventDescriptionNode = data.contentfulEventInformation;
  const eventExtrasText =
    data.contentfulEventsExtras.description.childMarkdownRemark.html;
  return (
    <EventsLayout title="Danny D'Alessandro | Events" header={mainHeader}>
      <EventsContainer>
        <EventInformation
          eventDescription={
            eventDescriptionNode
              .childContentfulEventInformationDescriptionTextNode
              .childMarkdownRemark.html
          }
          gatsbyImage={eventDescriptionNode.gatsbyImage}
        />
        <StudioBandInformation />

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
    contentfulEventInformation(order: { eq: 1 }) {
      id
      childContentfulEventInformationDescriptionTextNode {
        childMarkdownRemark {
          html
        }
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
