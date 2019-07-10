import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    header: {
      textAlign: 'center',
      backgroundColor: 'lightGrey',
      marginBottom: -50,
      padding: 0
    }
  })
);
