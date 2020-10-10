import grey from '@material-ui/core/colors/grey';
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
  rightBar: {
    position: 'sticky',
    top: 0,
  },
  searchBarInput: {
    borderRadius: '30px',
    backgroundColor: 'rgb(230,236,240)',
    width: '100%',
    marginTop: 10,
    padding: 8,
    paddingLeft: '15%',
    zIndex: 10,
  },
  searchBar: {
    position: 'relative',
    '& svg': {
      transition: 'all .1s ease-in-out',
      position: 'absolute',
      top: '38%',
      left: '3.5%',
      zIndex: 20,
      color: grey[500],
    },
  },
  searchBarFocusClass: {
    '& svg': {
      color: theme.palette.primary.main,
    },
    '& div': {
      backgroundColor: '#fff',
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  rightBarBlock: {
    backgroundColor: 'rgb(245,248,250)',
    marginTop: 20,
    borderRadius: 22,
    width: '100%',
    '& .MuiList-root': {
      paddingTop: 0,
    },
  },
  rightBlockHeader: {
    backgroundColor: 'transparent',
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,

    padding: '13px 18px',
    textAlign: 'center',
    '& h6': {
      fontWeight: 800,
      fontSize: 20,
    },
  },

  rightBlockListItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      fontWeight: 700,
    },
    '& .MuiListItemAvatar-root': {
      minWidth: 50,
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
    '&:hover': {
      backgroundColor: '#edf3f6',
    },
  },

  addTweetForm__footer__line: {
    height: 12,
    backgroundColor: '#E6ECF0',
  },
}));
