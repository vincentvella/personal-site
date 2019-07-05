import React from 'react';
import Divider from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './drawer.styles';
import AppIcon from '../app-icon';
import { Link } from 'gatsby';

interface DrawerProps {
  paddingTop?: boolean;
  drawerProps: any;
}

const createDrawerItem = ({ node: { frontmatter } }) => {
  const { title, path } = frontmatter;
  return (
    <Link to={path} style={{ textDecoration: 'none', color: 'black' }}>
      <ListItem button key={title}>
        <ListItemIcon>
          <AppIcon icon={title} />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </Link>
  );
};

const Drawer: React.FC<DrawerProps> = props => {
  const { paddingTop, drawerProps } = props;
  const theme = useTheme();
  const classes = useStyles(theme);
  const toolbarStyles = paddingTop ? { className: classes.toolbar } : {};
  return (
    <div>
      <div {...toolbarStyles} />
      <Divider />
      <List>{drawerProps.map(createDrawerItem)}</List>
    </div>
  );
};

export default Drawer;
