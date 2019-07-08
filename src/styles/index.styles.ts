import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    header: {
      textAlign: 'center',
      backgroundColor: 'lightGrey',
      marginBottom: 20,
      padding: theme.spacing(2)
    }
  })
);
