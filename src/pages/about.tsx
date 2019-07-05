import React from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import { DefaultLayout } from '../layouts';

const About = props => {
  const contentScreens = get(props, 'data.allMarkdownRemark.edges', []);
  return (
    <DefaultLayout drawerProps={contentScreens}>
      <div>About</div>
    </DefaultLayout>
  );
};

export default About;

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/about" } }) {
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
