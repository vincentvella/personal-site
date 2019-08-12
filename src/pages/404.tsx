import React from 'react';
import get from 'lodash.get';
import { DefaultLayout } from '../layouts';
import { Typography, Paper, Grid } from '@material-ui/core';
import { Link, graphql } from 'gatsby';

const logo = require('../../data/assets/logo/bottom-right-sloth.svg');

const Page: React.FC = props => {
  const contentScreens = get(props, 'data.allPagesJson.edges', []);

  return (
    <DefaultLayout drawerProps={contentScreens}>
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <Paper style={{ textAlign: 'center', marginTop: 20 }}>
            <Typography>
              You might be lost, maybe try going back <Link to="/">Home</Link>
            </Typography>
            <img src={logo} alt="Logo" height="200" />
          </Paper>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default Page;

export const pageQuery = graphql`
  query {
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
