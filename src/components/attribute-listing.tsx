import React from 'react';
import get from 'lodash.get';
import Img from 'gatsby-image';
import { Card, CardContent, Typography, Button, CardActions } from '@material-ui/core';
import { Link } from 'gatsby';

const AttributeListing = ({ node }) => {
  const {
    id,
    frontmatter: { title, coverImage, path }
  } = node;
  const image = get(coverImage, 'childImageSharp.fluid', null);
  return (
    <Card raised key={id}>
      <CardContent>
        <Img fluid={image} />
        <Typography variant="body1">{title}</Typography>
      </CardContent>
      <CardActions>
        <Link to={path} style={{ textDecoration: 'none' }}>
          <Button size="small">See More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default AttributeListing;
