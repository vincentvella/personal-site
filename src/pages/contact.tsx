import React from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import { DefaultLayout } from '../layouts';
import {
  Container,
  Grid,
  useTheme,
  Card,
  Typography,
  Divider
} from '@material-ui/core';
import SocialMediaChip from '../components/social-media-chip';
import ContactForm from '../components/contact-form';

const Contact = props => {
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
            <Card style={{ zIndex: 1, padding: 16 }}>
              <Typography variant="h5">Contact Me</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Feel free to connect with me on any of my social media accounts.
              </Typography>
              <Grid container alignItems="center" justify="center">
                {contactSources.map(SocialMediaChip)}
              </Grid>
              <Divider style={{ margin: 10 }} />
              <Typography variant="subtitle1" color="textSecondary">
                Already connected? Maybe you just have an exciting opportunity
                or idea and would like to get a direct response! Feel free to
                fill out the below form and I will reach out via email.
              </Typography>
              <ContactForm />
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
