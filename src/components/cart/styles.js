import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '160px',
  },
  controls: {
    display: 'flex',
    alignItems: 'right',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },

}));

export default useStyles;