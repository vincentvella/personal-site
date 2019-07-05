import React from 'react';
import { DefaultLayout } from '../layouts';
import { Typography, Paper } from '@material-ui/core';
import { Link } from 'gatsby';

const logo = require('../../data/assets/logo/bottom-right-sloth.svg');

const Page: React.FC = () => (
  <DefaultLayout>
    <Paper style={{ textAlign: 'center' }}>
      <Typography>
        You might be lost, maybe try going back <Link to="/">Home</Link>
      </Typography>
      <img src={logo} alt="Logo" height="200" />
    </Paper>
  </DefaultLayout>
);

export default Page;
