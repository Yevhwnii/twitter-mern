import React from 'react';
import CustomLink from '../shared/Link';
import classNames from 'classnames';

// Locals
import TweetActions from './TweetActions';
import TweetHeader, { GreySpan } from './TweetHeader';
import TweetBody from './TweetBody';
import TweetAvatar from './TweetAvatar';
import { extractDate, extractHour } from '../../utils/formatDate';
// MUI
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useTweetStyles = makeStyles(() => ({
  tweet: {
    '&:hover': {
      backgroundColor: 'rgb(245,248,250)',
      cursor: 'pointer',
    },
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  singleTweetPaper: {
    border: 0,
    margin: '10px 6px 2px 6px',
  },
  tweetFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
  },
  footerLine: {
    height: 20,
    backgroundColor: '#E6ECF0',
  },
  tweetActionsContainer: {
    maxHeight: '58px !important',
  },
  tweetDate: {
    display: 'flex',
    alignItems: 'center',
    margin: '7px 0px',
    paddingLeft: '8px',
    '& > span': {
      fontSize: 16,
    },
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
  createdAt: Date;
}

const Tweet: React.FC<TweetProps> = ({
  _id,
  user,
  body,
  createdAt,
}: TweetProps): React.ReactElement => {
  const classes = useTweetStyles();
  return (
    <Paper square className={classNames(classes.tweet)}>
      <CustomLink to={`/home/tweet/${_id}`}>
        <Grid container spacing={2}>
          <Grid item sm={2} md={1}>
            <TweetAvatar user={user} />
          </Grid>
          <Grid item sm={10} md={11}>
            <TweetHeader user={user} createdAt={createdAt} />
            <TweetBody body={body} />
            <TweetActions />
          </Grid>
        </Grid>
      </CustomLink>
    </Paper>
  );
};

const menuOptions = ['Edit', 'Delete'];

export const SingleTweet: React.FC<TweetProps> = ({
  user,
  body,
  createdAt,
}) => {
  const classes = useTweetStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Paper square className={classes.singleTweetPaper} variant='outlined'>
        <Grid container direction='column' spacing={0}>
          <Grid container direction='row' item xs={12}>
            <Grid item sm={2} md={1}>
              <TweetAvatar user={user} styles={{ marginLeft: 7 }} />
            </Grid>
            <Grid item sm={10} md={11}>
              <Grid container spacing={0}>
                <Grid item xs={11}>
                  <TweetHeader singleTweet user={user} createdAt={createdAt} />
                </Grid>
                <Grid item xs={1}>
                  <IconButton
                    aria-label='more'
                    aria-controls='long-menu'
                    aria-haspopup='true'
                    onClick={handleClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id='long-menu'
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: 48 * 4.5,
                        width: '20ch',
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                      },
                    }}>
                    {menuOptions.map((option) => (
                      <MenuItem
                        style={
                          option === 'Edit'
                            ? { borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }
                            : {}
                        }
                        key={option}
                        selected={option === 'Edit'}
                        onClick={handleClose}>
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TweetBody
              variant={'h5'}
              styles={{
                color: grey[800],
                lineHeight: 1.3125,
                marginLeft: 7,
                minHeight: 130,
                marginTop: 15,
              }}
              body={body}
            />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.tweetDate}>
              <GreySpan singleTweet={false}>
                {extractHour(new Date(createdAt))} •{' '}
                {extractDate(new Date(createdAt))}
              </GreySpan>
            </div>
          </Grid>
          <Grid className={classes.tweetActionsContainer} item xs={12}>
            <div className={classes.tweetFooter}>
              <TweetActions />
            </div>
          </Grid>
        </Grid>
      </Paper>
      <div className={classes.footerLine}></div>
      <Tweet
        createdAt={createdAt}
        user={{ fullname: 'Lili', username: 'lilijan', avatarUrl: 's' }}
        _id={''}
        body={'zopa'}
      />
    </>
  );
};

export default Tweet;
