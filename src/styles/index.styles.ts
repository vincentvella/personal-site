import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Constants } from '../common';

const { LayoutConstants } = Constants;

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: LayoutConstants.drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      marginLeft: LayoutConstants.drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${LayoutConstants.drawerWidth}px)`
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    }
  })
);
