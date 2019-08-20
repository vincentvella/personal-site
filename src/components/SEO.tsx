import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const SEO = () => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { title, description, image, url, twitterUsername }
      }
    }) => {
      return (
        <>
          <Helmet title={title}>
            <meta name="description" content={description} />
            <meta name="image" content={`${url}/${image}`} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${url}/${image}`} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${url}/${image}`} />
            <meta name="twitter:site" content={twitterUsername} />
          </Helmet>
        </>
      );
    }}
  />
);

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        description
        twitterUsername
        image
        title
        url
      }
    }
  }
`;
