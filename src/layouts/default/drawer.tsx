import React from 'react';
import Divider from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './drawer.styles';

const Drawer = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['About', 'Skills', 'Press', 'Resume', 'Contact'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Drawer;
