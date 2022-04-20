import React from 'react';
import Footer from './footer';
import Navigation from './navigation';
import './variable.css';
import './global.css';

const Layout = function (props) {
  const { children } = props;

  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
