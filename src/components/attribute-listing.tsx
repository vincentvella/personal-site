import React from 'react';
import get from 'lodash.get';
import Img from 'gatsby-image';
import { Card, CardContent, Typography } from '@material-ui/core';

const AttributeListing = ({ node }) => {
  const {
    id,
    frontmatter: { title, coverImage }
  } = node;
  const image = get(coverImage, 'childImageSharp.fluid', null);
  return (
    <Card raised key={id}>
      <CardContent>
        <Img fluid={image} />
        <Typography variant="body1">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default AttributeListing;
