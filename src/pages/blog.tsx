import React from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import { DefaultLayout } from '../layouts';

const Blog = props => {
  const contentScreens = get(props, 'data.allMarkdownRemark.edges', []);
  return (
    <DefaultLayout drawerProps={contentScreens}>
      <div>Blog</div>
    </DefaultLayout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/blog" } }) {
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
