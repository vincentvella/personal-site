import React from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import { DefaultLayout } from '../layouts';

const Development = props => {
  const contentScreens = get(props, 'data.allMarkdownRemark.edges', []);
  return (
    <DefaultLayout drawerProps={contentScreens}>
      <div>Development</div>
    </DefaultLayout>
  );
};

export default Development;

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/development" } }) {
      frontmatter {
        title
        subtitle
        path
        body
      }
    }
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "content" } } }) {
      edges {
        node {
          id
          frontmatter {
            body
            path
            subtitle
            title
            type
          }
        }
      }
    }
  }
`;
