import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';

interface TweetAvatarProps {
  user: {
    fullname: string;
    username?: string;
    avatarUrl: string;
  };
}
const useTweetAvatarStyles = makeStyles((theme) => ({
  tweetAvatar: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 10,
    '& > div': {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  },
}));

const TweetAvatar: React.FC<TweetAvatarProps> = ({ user }) => {
  const classes = useTweetAvatarStyles();
  return (
    <div className={classes.tweetAvatar}>
      <Avatar alt={`Avatar of user: ${user.fullname}`} src={user.avatarUrl}>
        U
      </Avatar>
    </div>
  );
};

export default TweetAvatar;
