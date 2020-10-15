import React from 'react';

import CustomLink from '../../shared/Link';

import PersonAddIcon from '@material-ui/icons/PersonAdd';

import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

interface RightBlockListItemProps {
  primaryText: string;
  secondaryText: string;
  showDivider?: boolean;
  to?: string;
  avatar?: {
    url: string;
    alt: string;
  };
}

const useRightBlockListItemStyles = makeStyles(() => ({
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
    '& hr': {
      width: '100%',
    },
  },
}));

const RightBlockListItem: React.FC<RightBlockListItemProps> = ({
  avatar,
  primaryText,
  secondaryText,
  showDivider,
  to,
}) => {
  const classes = useRightBlockListItemStyles();

  if (!avatar) {
    return (
      <>
        <CustomLink to={`/home${to}`}>
          <ListItem className={classes.rightBlockListItem}>
            <ListItemText
              primary={primaryText}
              secondary={`'Tweets: ${secondaryText}`}
            />
          </ListItem>
          {showDivider && <Divider component='li' />}
        </CustomLink>
      </>
    );
  } else {
    return (
      <>
        <ListItem className={classes.rightBlockListItem}>
          <ListItemAvatar>
            <Avatar alt={avatar.alt} src={avatar.url} />
          </ListItemAvatar>
          <ListItemText primary={primaryText} secondary={`@${secondaryText}`} />
          <Button color='primary'>
            <PersonAddIcon />
          </Button>
        </ListItem>
        {showDivider && <Divider component='li' />}
      </>
    );
  }
};

export default RightBlockListItem;
