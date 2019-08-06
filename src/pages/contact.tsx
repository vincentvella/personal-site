import React from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import { DefaultLayout } from '../layouts';
import {
  Chip,
  Container,
  Grid,
  useTheme,
  Card,
  Typography
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = props => {
  const theme = useTheme();
  const { title, subtitle, body, contactSources } = get(
    props,
    'data.pagesJson',
    {
      title: '',
      subtitle: '',
      body: '',
      contactSources: []
    }
  );
  const contentScreens = get(props, 'data.allPagesJson.edges', []);
  return (
    <DefaultLayout drawerProps={contentScreens}>
      <Container>
        <Grid container spacing={0} style={{ alignItems: 'center' }}>
          <Grid item xs={12}>
            <Card style={{ zIndex: 1, padding: 10 }}>
              <Typography variant="h5">Contact Me</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Feel free to reach out to me on any of my social media accounts.
              </Typography>
              <Grid container alignItems="center" justify="center">
                {contactSources.map(
                  ({ title, icon, iconSet, badgeColor, link }) => {
                    return (
                      <a
                        href={link}
                        style={{
                          textDecoration: 'none'
                        }}
                      >
                        <Chip
                          label={title}
                          style={{
                            backgroundColor: badgeColor,
                            color: 'white',
                            cursor: 'pointer',
                            margin: 10
                          }}
                          icon={
                            <FontAwesomeIcon
                              icon={[iconSet, icon]}
                              style={{ color: 'white' }}
                            />
                          }
                        />
                      </a>
                    );
                  }
                )}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  );
};

export default Contact;

export const pageQuery = graphql`
  query {
    pagesJson(path: { eq: "/contact" }) {
      id
      body
      path
      subtitle
      title
      type
      contactSources {
        title
        icon
        iconSet
        link
        badgeColor
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
