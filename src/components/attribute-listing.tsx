import React from 'react';
import get from 'lodash.get';
import Img from 'gatsby-image';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions
} from '@material-ui/core';
import { Link } from 'gatsby';

declare global {
  interface Window {
    gtag: (name: string, type: string, data: any) => void;
  }
}

const AttributeListing = ({ node: { id, title, coverImage, path } }) => {
  const image = get(coverImage, 'childImageSharp.fluid', null);
  const onClick = () =>
    window.gtag && window.gtag('Click Homepage Link', 'click', { id, title });
  return (
    <Card raised key={id}>
      <CardContent>
        <Img fluid={image} />
        <Typography variant="body1">{title}</Typography>
      </CardContent>
      <CardActions>
        <Link onClick={onClick} to={path} style={{ textDecoration: 'none' }}>
          <Button size="small">See More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default AttributeListing;
