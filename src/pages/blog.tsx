import React from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import { DefaultLayout } from '../layouts';

const Blog = props => {
  const contentScreens = get(props, 'data.allPagesJson.edges', []);
  return (
    <DefaultLayout drawerProps={contentScreens}>
      <div>Blog</div>
    </DefaultLayout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    pagesJson(path: { eq: "/blog" }) {
      id
      body
      path
      subtitle
      title
      type
    }
    allPagesJson(filter: { type: { eq: "content" } }, sort: { fields: title }) {
      edges {
        node {
          id
          body
          path
          subtitle
          title
          type
        }
      }
    }
  }
`;
