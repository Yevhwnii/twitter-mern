import { makeStyles } from '@material-ui/core/styles';

export const useHomeStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
  },
  tweetsWrapper: {
    height: '100%',
    borderTop: '0',
    borderBottom: '0',
    '& > div.header': {
      borderLeft: '0',
      borderRight: '0',
      borderTop: '0',
      padding: '10px 15px',

      '& h6': {
        fontWeight: 800,
      },
    },
  },
  addTweetForm__footer__line: {
    height: 12,
    backgroundColor: '#E6ECF0',
  },
}));
