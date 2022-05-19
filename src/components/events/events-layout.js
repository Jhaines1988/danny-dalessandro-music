import React from 'react';
import Footer from '../footer';
import Navigation from '../navigation';
import Container from '../container';
import '../global.css';
import '../variable.css';
import BackgroundStatic from './events-background';
import EventsMainHeader from './events-main-header';
const EventsLayout = function ({ header, ...props }) {
  const { children } = props;

  return (
    <>
      <Navigation />
      <BackgroundStatic>
        <EventsMainHeader header={header} />
      </BackgroundStatic>
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default EventsLayout;
