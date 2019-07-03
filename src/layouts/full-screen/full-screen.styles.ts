import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Constants } from '../../common';

const { LayoutConstants } = Constants;

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    appBarTitle: {
      marginLeft: 24
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
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
