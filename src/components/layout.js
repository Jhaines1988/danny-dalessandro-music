import React from 'react';
import Footer from './footer';
import Navigation from './navigation';
import Container from './container';
import './variable.css';
import './global.css';
import '@fontsource/lato';
import '@fontsource/lato/700.css';
const Layout = function (props) {
  const { children } = props;

  return (
    <>
      <Navigation />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
