import React from 'react';
import get from 'lodash.get';
import { graphql } from 'gatsby';
import { DefaultLayout } from '../layouts';
import {
  Container,
  Grid,
  Typography,
  Divider,
  Card,
  CardContent,
  Tooltip,
  Theme,
  Button,
  CardHeader,
  Fade,
  Paper,
  ClickAwayListener
} from '@material-ui/core';
import DevelopmentCard from '../components/development-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';

const Development = props => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();
  const [popperValue, setPopperValue] = React.useState<String | undefined>(
    undefined
  );
  const { stacks } = get(props, 'data.pagesJson', {
    title: '',
    subtitle: '',
    body: '',
    stacks: []
  });
  const contentScreens = get(props, 'data.allPagesJson.edges', []);
  const tooltipHeaders = [
    'Fundamental Awareness (basic knowledge)',
    'Novice (limited experience)',
    'Intermediate (practical application)',
    'Advanced (applied theory)',
    'Expert (recognized authority)'
  ];
  const handleClick = (newPlacement: PopperPlacementType, value: string) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
    setOpen(popperValue !== value);
    setPopperValue(value);
    setPlacement(newPlacement);
  };
  return (
    <DefaultLayout drawerProps={contentScreens}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography style={{ padding: 5 }}>{popperValue}</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Container>
        <Card style={{ zIndex: 1, padding: 16 }}>
          <Grid container>
            {stacks.map(stack => {
              const { title, developmentNodes } = stack;
              return (
                <Grid item xs={12}>
                  <Typography variant="h6" color="textSecondary">
                    {title}
                  </Typography>
                  <Divider />
                  <Grid container>
                    {(developmentNodes || []).map(DevelopmentCard)}
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Card>
        <Card style={{ marginTop: 10, marginBottom: 10, textAlign: 'center' }}>
          <CardHeader title="Proficiency Scale" />
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <CardContent>
              {tooltipHeaders.map(header => (
                <Button onClick={handleClick('top', header)}>
                  <FontAwesomeIcon icon={faStar} color="gold" />
                </Button>
              ))}
            </CardContent>
          </ClickAwayListener>
        </Card>
      </Container>
    </DefaultLayout>
  );
};

export default Development;

export const pageQuery = graphql`
  query {
    pagesJson(path: { eq: "/development" }) {
      id
      body
      path
      subtitle
      title
      type
      stacks {
        title
        developmentNodes {
          image {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
            publicURL
          }
          proficiencyLevel
          title
        }
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
