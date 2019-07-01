import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Constants } from '../../common';

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
    appBarTitle: {
      marginLeft: 24
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: LayoutConstants.drawerWidth
    },
    content: {
      flexGrow: 1
    }
  })
);
