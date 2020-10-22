import React from 'react';

// MUI
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { grey, red } from '@material-ui/core/colors';
// Icons

import ReplyIcon from '@material-ui/icons/ReplyOutlined';
import HeartIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublishIcon from '@material-ui/icons/Publish';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

export const useTweetActionsStyles = makeStyles((theme) => ({
  tweetActions: {
    margin: '10px 0px',
    position: 'relative',
    left: -10,
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // Heart button
    '& button.red': {
      color: red[600],
      '&:hover': {
        backgroundColor: 'rgba(226, 106, 106, 0.060)',
      },
      '&:hover svg': {
        color: 'rgba(226, 106, 106, 1) !important',
      },
    },
    // All others buttons
    '& button': {
      minWidth: 0,
      padding: 7,
      '&:hover svg': {
        color: theme.palette.primary.main + ' !important',
      },
    },
    // Icon`s size
    '& svg': {
      fontSize: 22,
    },
  },
  tweetActions__withText: {
    '&:hover span, &:hover svg': {
      color: theme.palette.primary.main + ' !important',
    },
  },
}));

interface TweetActionProps {
  styles?: any;
}

const TweetActions: React.FC<TweetActionProps> = ({ styles }) => {
  const classes = useTweetActionsStyles();
  return (
    <div
      className={classes.tweetActions}
      style={{ ...styles }}
      aria-label='tweet actions'>
      <div className={classes.tweetActions__withText}>
        <IconButton color='primary'>
          <CommentIcon color='secondary' />
        </IconButton>
        <span
          style={{
            marginLeft: 4,
            fontSize: 14,
            color: grey[500],
          }}>
          1
        </span>
      </div>

      <IconButton color='primary'>
        <ReplyIcon color='secondary' />
      </IconButton>
      <IconButton className='red' color='primary'>
        <HeartIcon color='secondary' />
      </IconButton>
      <IconButton color='primary'>
        <PublishIcon color='secondary' />
      </IconButton>
    </div>
  );
};

export default TweetActions;
