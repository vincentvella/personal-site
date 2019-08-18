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
            <meta name="image" content={image} />
            {url && <meta property="og:url" content={url} />}
            {title && <meta property="og:title" content={title} />}
            {description && (
              <meta property="og:description" content={description} />
            )}
            {image && <meta property="og:image" content={image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {title && <meta name="twitter:title" content={title} />}
            {description && (
              <meta name="twitter:description" content={description} />
            )}
            {image && <meta name="twitter:image" content={image} />}
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
