import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      color: 'white',
      cursor: 'pointer',
      margin: 10
    },
    icon: { color: 'white' },
    link: { textDecoration: 'none' }
  })
);
