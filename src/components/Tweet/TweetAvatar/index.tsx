import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';

interface TweetAvatarProps {
  user: {
    fullname: string;
    username?: string;
    avatarUrl: string;
  };
  styles?: any;
}
const useTweetAvatarStyles = makeStyles((theme) => ({
  tweetAvatar: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: 10,
    paddingLeft: 10,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
    '& > div': {
      width: theme.spacing(6),
      height: theme.spacing(6),
      [theme.breakpoints.down('sm')]: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
    },
  },
}));

const TweetAvatar: React.FC<TweetAvatarProps> = ({ user, styles }) => {
  const classes = useTweetAvatarStyles();
  return (
    <div className={classes.tweetAvatar} {...styles}>
      <Avatar alt={`Avatar of user: ${user.fullname}`} src={user.avatarUrl}>
        U
      </Avatar>
    </div>
  );
};

export default TweetAvatar;
