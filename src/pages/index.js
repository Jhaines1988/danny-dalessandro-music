import * as React from 'react';
import Home from '../components/home';
import HomeLayout from '../components/home/home-layout';
import HomeAboutSection from '../components/home/home-about-section';

const IndexPage = ({ data }) => {
  return (
    <>
      <HomeLayout title={`Danny D'Alessandro Music | Home`}>
        <Home />
        <HomeAboutSection />
      </HomeLayout>
    </>
  );
};

export default IndexPage;
