import React from 'react';
import About from '@material-ui/icons/AccountCircleTwoTone';
import Blog from '@material-ui/icons/LaptopMacTwoTone';
import Contact from '@material-ui/icons/PhonelinkTwoTone';
import Development from '@material-ui/icons/CodeTwoTone';
import Press from '@material-ui/icons/VerticalSplitTwoTone';
import Resume from '@material-ui/icons/AssignmentIndTwoTone';

const Icons = {
  About,
  Blog,
  Contact,
  Development,
  Press,
  Resume
};

interface AppIconProps {
  icon: 'About' | 'Blog' | 'Contact' | 'Development' | 'Press' | 'Resume';
}

const AppIcon: React.FC<AppIconProps> = props => {
  const { icon } = props;
  const Icon = Icons[icon];
  return <Icon />;
};

export default AppIcon;
