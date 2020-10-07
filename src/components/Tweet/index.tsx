import React from 'react';
import classNames from 'classnames';

// MUI
import Avatar from '@material-ui/core/Avatar/Avatar';
import { grey, red } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core';

// Icons
import ReplyIcon from '@material-ui/icons/ReplyOutlined';
import HeartIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublishIcon from '@material-ui/icons/Publish';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

// TODO: Divide tweet into small components

const useTweetStyles = makeStyles((theme) => ({
  tweet: {
    '&:hover': {
      backgroundColor: 'rgb(245,248,250)',
      cursor: 'pointer',
    },
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  tweetBody: {
    paddingRight: 7,
  },
  tweetAvatar: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 10,
    '& > div': {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  },
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

interface TweetProps {
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
  body: string;
}

const Tweet: React.FC<TweetProps> = ({
  user,
  body,
}: TweetProps): React.ReactElement => {
  const classes = useTweetStyles();
  return (
    <Paper square className={classNames(classes.tweet)} variant='outlined'>
      <Grid container spacing={2}>
        <Grid item sm={3} md={2} lg={1}>
          <div className={classes.tweetAvatar}>
            <Avatar
              alt={`Avatar of user: ${user.fullname}`}
              src={user.avatarUrl}>
              U
            </Avatar>
          </div>
        </Grid>
        <Grid item sm={9} md={10} lg={11}>
          <Typography>
            <b>{user.fullname}</b>
            <span style={{ color: grey[500], marginLeft: 5 }}>
              @{user.username} • 2 min
            </span>
          </Typography>
          <Typography className={classes.tweetBody} variant='body1'>
            {body}
          </Typography>
          <div className={classes.tweetActions} aria-label='tweet actions'>
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
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Tweet;
