import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chip } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import useStyles from './social-media-chip.styles';

const SocialMediaChip = ({ title, icon, iconSet, badgeColor, link }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <a href={link} className={classes.link}>
      <Chip
        className={classes.chip}
        icon={
          <FontAwesomeIcon icon={[iconSet, icon]} className={classes.icon} />
        }
        label={title}
        style={{ backgroundColor: badgeColor }}
      />
    </a>
  );
};

export default SocialMediaChip;
