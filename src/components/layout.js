import React from 'react';
import Footer from './footer';
import './variable.css';

const Layout = function (props) {
  const { children } = props;

  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
