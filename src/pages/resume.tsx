import React from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import { Document, Page } from 'react-pdf';
import { DefaultLayout } from '../layouts';
import { Paper } from '@material-ui/core';

const Resume = props => {
  console.log('PROPS', props);
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const contentScreens = get(props, 'data.allMarkdownRemark.edges', []);
  const onPageLoadSuccess = ({ numPages }) => setNumPages(numPages);
  const path = props.data.file.publicURL;
  return (
    <DefaultLayout drawerProps={contentScreens}>
      <Paper>
        <Document file={path} onLoadSuccess={onPageLoadSuccess} onLoadError={console.error}>
          <Page pageNumber={pageNumber} />
        </Document>
      </Paper>
    </DefaultLayout>
  );
};

export default Resume;

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "resume/Resume.pdf" }) {
      id
      publicURL
    }
    markdownRemark(frontmatter: { path: { eq: "/resume" } }) {
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
