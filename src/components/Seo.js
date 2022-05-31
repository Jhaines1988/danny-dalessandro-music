import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';

const Seo = ({ title, description, image, lang = 'en' }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    siteName,
    defaultImage,
    keywords,
  } = site.siteMetadata;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    siteName: siteName,
    image: `${siteUrl}${image || defaultImage}`,
    keywords: keywords,
  };

  return (
    <Helmet
      title={seo.title}
      htmlAttributes={{
        lang,
      }}>
      <title>{seo.title}</title>

      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <link href={siteUrl} />
      <meta name='keywords' content={seo.keywords.join(',')} />
      <meta property='og:site_name' content={seo.siteName}></meta>
      <meta property='og:url' content={seo.url} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
    </Helmet>
  );
};
export default Seo;
Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  siteUrl: PropTypes.string,
  siteName: PropTypes.string,
  image: PropTypes.string,
};
Seo.defaultProps = {
  title: null,
  description: null,
  siteUrl: null,
  siteName: null,
  image: null,
};

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
        siteName
        defaultImage: image
        keywords
      }
    }
  }
`;
