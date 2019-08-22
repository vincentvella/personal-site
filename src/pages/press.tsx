import React from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import { DefaultLayout } from '../layouts';
import {
  Container,
  Card,
  Grid,
  CardHeader,
  CardActionArea,
  CardActions,
  Button,
  Divider
} from '@material-ui/core';
import Img from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

const Press = props => {
  const contentScreens = get(props, 'data.allPagesJson.edges', []);
  const { pressItems } = get(props, 'data.pagesJson', {
    title: '',
    subtitle: '',
    body: '',
    pressItems: []
  });
  return (
    <DefaultLayout drawerProps={contentScreens}>
      <Container>
        {pressItems.map(({ link, image, occurrence, title }) => {
          const img = get(image, 'childImageSharp.fluid', null);
          return (
            <Card style={{ margin: 10 }} key={title}>
              <Grid container>
                <Grid item xs={12}>
                  <OutboundLink
                    href={link}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <CardActionArea>
                      <CardHeader title={title} subheader={occurrence} />
                    </CardActionArea>
                  </OutboundLink>
                </Grid>
                <Grid item xs={12}>
                  <Img fluid={img} />
                </Grid>
                <OutboundLink
                  href={link}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <CardActions>
                    <Button>See Source</Button>
                  </CardActions>
                </OutboundLink>
              </Grid>
              <Divider />
            </Card>
          );
        })}
      </Container>
    </DefaultLayout>
  );
};

export default Press;

export const pageQuery = graphql`
  query {
    pagesJson(path: { eq: "/press" }) {
      id
      body
      path
      subtitle
      title
      type
      pressItems {
        link
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
          publicURL
        }
        occurrence
        title
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
