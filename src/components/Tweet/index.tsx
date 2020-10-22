import React from 'react';
import CustomLink from '../shared/Link';
import classNames from 'classnames';

// Locals
import TweetActions from './TweetActions';
import TweetHeader from './TweetHeader';
import TweetBody from './TweetBody';
import TweetAvatar from './TweetAvatar';
// MUI
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useTweetStyles = makeStyles(() => ({
  tweet: {
    '&:hover': {
      backgroundColor: 'rgb(245,248,250)',
      cursor: 'pointer',
    },
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  singleTweetPaper: {
    border: 0,
    margin: '10px 6px',
  },
}));

interface TweetProps {
  _id: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
  body: string;
}

const Tweet: React.FC<TweetProps> = ({
  _id,
  user,
  body,
}: TweetProps): React.ReactElement => {
  const classes = useTweetStyles();
  return (
    <Paper square className={classNames(classes.tweet)} variant='outlined'>
      <CustomLink to={`/home/tweet/${_id}`}>
        <Grid container spacing={2}>
          <Grid item sm={2} md={1}>
            <TweetAvatar user={user} />
          </Grid>
          <Grid item sm={10} md={11}>
            <TweetHeader user={user} />
            <TweetBody body={body} />
            <TweetActions />
          </Grid>
        </Grid>
      </CustomLink>
    </Paper>
  );
};

export const SingleTweet: React.FC<TweetProps> = ({ user, body }) => {
  const classes = useTweetStyles();
  return (
    <Paper square className={classes.singleTweetPaper} variant='outlined'>
      <Grid container direction='column' spacing={2}>
        <Grid container direction='row' item xs={12}>
          <Grid item sm={2} md={1}>
            <TweetAvatar user={user} styles={{ marginLeft: 7 }} />
          </Grid>
          <Grid item sm={10} md={11}>
            <TweetHeader singleTweet user={user} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TweetBody
            variant={'h5'}
            styles={{ color: grey[800], lineHeight: 1.3125, marginLeft: 7 }}
            body={body}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Tweet;
