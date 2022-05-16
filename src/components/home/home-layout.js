import React from 'react';
import Footer from '../footer';
import Navigation from '../navigation';
import Container from '../container';
import GbiBridged from '../background/gbi-bridged';

export default function HomeLayout(props) {
  return (
    <>
      <Navigation />
      {/* <GbiBridged> */}
      {/* <Container> */}
      <main>{props.children}</main>
      {/* </Container> */}
      {/* <Footer /> */}
      {/* </GbiBridged> */}
    </>
  );
}
