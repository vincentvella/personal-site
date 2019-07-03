import React from 'react';
import get from 'lodash.get';
import Img from 'gatsby-image';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';

const AttributeListing = ({ node }) => {
  const { id, frontmatter } = node;
  const image = get(frontmatter, 'coverImage.childImageSharp.fluid', null);
  console.log(image);
  console.log({ id, frontmatter });
  return (
    <Card raised key={id}>
      <CardContent>
        <Img fluid={image} />
        <Typography variant="h6">{frontmatter.title}</Typography>
      </CardContent>
    </Card>
  );
};

export default AttributeListing;
