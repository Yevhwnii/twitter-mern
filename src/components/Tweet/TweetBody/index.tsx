import React from 'react';

import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Variant } from '@material-ui/core/styles/createTypography';

const useTweetBodyStyles = makeStyles(() => ({
  tweetBody: {
    paddingRight: 7,
    wordBreak: 'break-word',
  },
}));

interface TweetBodyProps {
  body: string;
  variant?: Variant;
  styles?: any;
}

const TweetBody: React.FC<TweetBodyProps> = ({ body, styles, variant }) => {
  const classes = useTweetBodyStyles();
  return (
    <Typography
      className={classes.tweetBody}
      variant={variant ? variant : 'body1'}
      style={{ ...styles }}>
      {body}
    </Typography>
  );
};

export default TweetBody;
