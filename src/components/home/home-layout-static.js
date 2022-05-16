import React from 'react';
import Footer from '../footer';
import Navigation from '../navigation';
import Container from '../container';
import BackgroundStatic from '../background/background-static';

export default function HomeLayoutStatic(props) {
  return (
    <>
      <Navigation />

      <BackgroundStatic>
        <Container>
          <main>{props.children}</main>
        </Container>
      </BackgroundStatic>
    </>
  );
}
