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

interface DrawerProps {
  paddingTop?: boolean;
}

const Drawer: React.FC<DrawerProps> = props => {
  const { paddingTop } = props;
  const theme = useTheme();
  const classes = useStyles(theme);
  const toolbarStyles = paddingTop ? { className: classes.toolbar } : {};
  return (
    <div>
      <div {...toolbarStyles} />
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
