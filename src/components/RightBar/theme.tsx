import { makeStyles } from '@material-ui/core/styles';

export const useRightBarStyles = makeStyles(() => ({
  rightBar: {
    position: 'sticky',
    top: 0,
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
}));
