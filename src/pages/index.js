import React from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import { Divider, Typography, Container, useTheme, Grid } from '@material-ui/core';
import { FullScreenLayout } from '../layouts';
import useStyles from '../styles/index.styles';
import AttributeListing from '../components/attribute-listing';

const App = props => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { title, subtitle, body } = get(props, 'data.markdownRemark.frontmatter', {
    title: '',
    subtitle: '',
    body: ''
  });
  const contentScreens = get(props, 'data.allMarkdownRemark.edges', []);
  console.log(props);
  return (
    <FullScreenLayout>
      <Container maxWidth={false} className={classes.header}>
        <Typography variant="h2">{title}</Typography>
        <Divider />
        <Typography variant="h5">{subtitle}</Typography>
      </Container>
      <Container style={{ padding: theme.spacing(3) }}>
        <Typography paragraph>{body}</Typography>
      </Container>
      <Grid container spacing={2} style={{ padding: theme.spacing(2) }}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {contentScreens.map(screen => (
              <Grid key={screen.node.id} item xs={4} md={3} lg={2}>
                <AttributeListing {...screen} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </FullScreenLayout>
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
            coverImage {
              childImageSharp {
                fluid(maxWidth: 1280, quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
              publicURL
            }
          }
        }
      }
    }
  }
`;
