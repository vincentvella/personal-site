import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chip } from '@material-ui/core';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { useTheme } from '@material-ui/styles';
import useStyles from './social-media-chip.styles';

const SocialMediaChip = ({ title, icon, iconSet, badgeColor, link }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <OutboundLink href={link} className={classes.link} key={icon}>
      <Chip
        className={classes.chip}
        icon={
          <FontAwesomeIcon icon={[iconSet, icon]} className={classes.icon} />
        }
        label={title}
        style={{ backgroundColor: badgeColor }}
      />
    </OutboundLink>
  );
};

export default SocialMediaChip;
