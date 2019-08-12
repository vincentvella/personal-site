import React from 'react';
import { Card, CardContent, Typography, Grid, Hidden } from '@material-ui/core';
import get from 'lodash.get';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const DevelopmentCard = ({ title, image, proficiencyLevel }) => {
  const img = get(image, 'childImageSharp.fluid', null);
  let stars = [];
  for (let i = 0; i < parseInt(proficiencyLevel); i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} color="gold" />);
  }

  return (
    <Grid
      key={title}
      item
      xs={4}
      sm={3}
      md={4}
      lg={3}
      xl={2}
      style={{ padding: 5 }}
    >
      <Card>
        <Grid container>
          <Hidden mdUp>
            <Grid item xs={12} style={{ alignSelf: 'center' }}>
              <Img fluid={img} />
            </Grid>
          </Hidden>
          <Grid item xs md={9}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {title}
              </Typography>
              {stars}
            </CardContent>
          </Grid>
          <Hidden xsDown>
            <Grid item md={3} style={{ alignSelf: 'center', padding: 5 }}>
              <Img fluid={img} />
            </Grid>
          </Hidden>
        </Grid>
      </Card>
    </Grid>
  );
};

export default DevelopmentCard;
