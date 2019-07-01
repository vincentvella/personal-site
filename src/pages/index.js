import React from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import { Divider, Typography, Container, useTheme } from '@material-ui/core';
import { DefaultLayout } from '../layouts';

const App = props => {
  const theme = useTheme();
  const { title, subtitle, path, body } = get(props, 'data.markdownRemark.frontmatter');
  console.log(props);
  return (
    <DefaultLayout>
      <Container
        style={{ textAlign: 'center', backgroundColor: 'lightGrey', marginBottom: 20, padding: theme.spacing(2) }}
      >
        <Typography variant="h2">{title}</Typography>
        <Divider variant="inset" />
        <Typography variant="h5">{subtitle}</Typography>
      </Container>
      <Container style={{ padding: theme.spacing(3) }}>
        <Typography paragraph>{body}</Typography>
      </Container>
      <Container style={{ padding: theme.spacing(3) }}>
        <Typography paragraph>{body}</Typography>
      </Container>
    </DefaultLayout>
  );
};

export default App;

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/" } }) {
      frontmatter {
        title
        subtitle
        path
        body
      }
    }
  }
`;
