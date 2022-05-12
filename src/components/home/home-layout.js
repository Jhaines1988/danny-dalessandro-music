import React from 'react';
import Footer from '../footer';
import Navigation from '../navigation';
import Container from '../container';
import { StaticImage } from 'gatsby-plugin-image';
import GbiBridged from '../gbi-bridged';
export default function HomeLayout(props) {
  return (
    <>
      <GbiBridged>
        <Navigation />
        <Container>
          <main>{props.children}</main>
        </Container>
        <Footer />
      </GbiBridged>
    </>
  );
  return (
    <div style={{ display: 'grid' }}>
      <StaticImage
        style={{
          gridArea: '1/1',
        }}
        layout='constrained'
        aspectRatio={1}
        alt=''
        src={
          'https://res.cloudinary.com/dli2yq8fm/image/upload/t_svg-transformation/v1651698436/Danny/original-hero.png'
        }
        formats={['auto', 'webp', 'avif']}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: '1/1',
          position: 'relative',
          // This centers the other elements inside the hero component
          placeItems: 'baseline',
          display: 'grid',
          height: '100vh',
          minWidth: 0,
        }}>
        <Navigation />
        <Container>
          <main>{props.children}</main>
        </Container>
        <Footer />
      </div>
    </div>
  );
}
