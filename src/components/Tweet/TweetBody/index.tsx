import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useTweetBodyStyles = makeStyles((theme) => ({
  tweetBody: {
    paddingRight: 7,
  },
}));

interface TweetBodyProps {
  body: string;
}

const TweetBody: React.FC<TweetBodyProps> = ({ body }) => {
  const classes = useTweetBodyStyles();
  return (
    <Typography className={classes.tweetBody} variant='body1'>
      {body}
    </Typography>
  );
};

export default TweetBody;
