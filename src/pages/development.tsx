import React from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import { DefaultLayout } from '../layouts';
import { Container, Grid, Typography, Divider, Card } from '@material-ui/core';
import DevelopmentCard from '../components/development-card';

const Development = props => {
  const { stacks } = get(props, 'data.pagesJson', {
    title: '',
    subtitle: '',
    body: '',
    stacks: []
  });
  const contentScreens = get(props, 'data.allPagesJson.edges', []);
  return (
    <DefaultLayout drawerProps={contentScreens}>
      <Container>
        <Card style={{ zIndex: 1, padding: 16 }}>
          <Grid container>
            {stacks.map(stack => {
              const { title, developmentNodes } = stack;
              return (
                <Grid item xs={12}>
                  <Typography variant="h6" color="textSecondary">
                    {title}
                  </Typography>
                  <Grid container>
                    {(developmentNodes || []).map(DevelopmentCard)}
                  </Grid>
                  <Divider />
                </Grid>
              );
            })}
          </Grid>
        </Card>
      </Container>
    </DefaultLayout>
  );
};

export default Development;

export const pageQuery = graphql`
  query {
    pagesJson(path: { eq: "/development" }) {
      id
      body
      path
      subtitle
      title
      type
      stacks {
        title
        developmentNodes {
          image {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
            publicURL
          }
          proficiencyLevel
          title
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
