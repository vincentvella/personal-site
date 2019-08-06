import React from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { DefaultLayout } from '../layouts';
import useStyles from '../styles/about.styles';
import {
  Container,
  Typography,
  useTheme,
  Card,
  CardContent,
  Grid
} from '@material-ui/core';

const About = props => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { title, subtitle, body, contentAreas } = get(props, 'data.pagesJson', {
    title: '',
    subtitle: '',
    body: '',
    contentAreas: []
  });
  const contentScreens = get(props, 'data.allPagesJson.edges', []);
  return (
    <DefaultLayout drawerProps={contentScreens}>
      <Container>
        {contentAreas.map(area => {
          const { coverPhoto, title, message } = area;
          const image = get(coverPhoto, 'childImageSharp.fluid', null);
          return (
            <>
              <Container maxWidth={false} className={classes.header}>
                <Img fluid={image} style={{ zIndex: 0 }} />
              </Container>
              <Grid container spacing={0} style={{ padding: theme.spacing(2) }}>
                <Grid item xs={12}>
                  <Grid container justify="flex-start" spacing={2}>
                    <Card style={{ zIndex: 1 }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {message}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </>
          );
        })}
      </Container>
    </DefaultLayout>
  );
};

export default About;

export const pageQuery = graphql`
  query {
    pagesJson(path: { eq: "/about" }) {
      id
      body
      path
      subtitle
      title
      type
      contentAreas {
        message
        title
        coverPhoto {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
          publicURL
        }
      }
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
