import React, { useState } from 'react';
import classNames from 'classnames';

// Local
import Tweet from '../components/Tweet';
import SideMenu from '../components/SideMenu';

// Material UI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container/Container';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper/Paper';
import { makeStyles, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import { grey } from '@material-ui/core/colors';

const useHomeStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
  },
  tweetsWrapper: {
    height: '100%',
    borderTop: '0',
    borderBottom: '0',
    '& > div.header': {
      borderLeft: '0',
      borderRight: '0',
      borderTop: '0',
      padding: '10px 15px',
      '& h6': {
        fontWeight: 800,
      },
    },
  },
  rightBar: {
    position: 'sticky',
    top: 0,
  },
  searchBarInput: {
    borderRadius: '30px',
    backgroundColor: 'rgb(230,236,240)',
    width: '100%',
    marginTop: 10,
    padding: 8,
    paddingLeft: '15%',
    zIndex: 10,
  },
  searchBar: {
    position: 'relative',
    '& svg': {
      transition: 'all .1s ease-in-out',
      position: 'absolute',
      top: '38%',
      left: '3.5%',
      zIndex: 20,
      color: grey[500],
    },
  },
  searchBarFocusClass: {
    '& svg': {
      color: theme.palette.primary.main,
    },
    '& div': {
      backgroundColor: '#fff',
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  relevantTopics: {
    backgroundColor: 'rgb(245,248,250)',
    marginTop: 15,
    width: '100%',
  },
  relevantTopics__header: {
    backgroundColor: 'rgb(245,248,250)',
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,

    padding: 13,
    textAlign: 'center',
    '& h6': {
      fontWeight: 800,
      fontSize: 22,
    },
  },
}));

const Home = () => {
  const classes = useHomeStyles();
  const [addFocusClass, setAddFocusClass] = useState(false);
  const focusClass = addFocusClass ? classes.searchBarFocusClass : '';

  const onFocusInput = () => {
    setAddFocusClass(true);
  };
  const onBlurInput = () => {
    setAddFocusClass(false);
  };
  return (
    <Container
      className={classes.container}
      style={{ height: '100vh', maxWidth: '1400px' }}
      maxWidth='lg'>
      <Grid container spacing={4}>
        <Grid item xs={1} md={3}>
          <SideMenu />
        </Grid>
        <Grid item xs={8} md={7}>
          <Paper square className={classes.tweetsWrapper} variant='outlined'>
            <Paper className='header' square variant='outlined'>
              <Typography variant='h6'>Home page</Typography>
            </Paper>
            {[
              ...new Array(20).fill(
                <Tweet
                  body={` Today, it took another 2 hours of debating with Comcast, before I
              reaching someone who could reply outside of a script. This was round
              3 with them, and I would have likely given up a long time ago, were
              it not for my own with in Customer Service. Draw your own
              conclusions.`}
                  user={{
                    fullname: 'Richard Brooklyn',
                    username: 'richibrook',
                    avatarUrl:
                      'https://images.unsplash.com/photo-1489481039754-8701aeda983b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80',
                  }}
                />
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <div className={classes.rightBar}>
            <div className={classNames(classes.searchBar, focusClass)}>
              <SearchIcon />
              <Input
                onFocus={onFocusInput}
                onBlur={onBlurInput}
                placeholder='Search...'
                className={classes.searchBarInput}
                disableUnderline
              />
            </div>
            <Paper className={classes.relevantTopics}>
              <Paper
                square
                className={classes.relevantTopics__header}
                variant='outlined'>
                <Typography variant='h6'>Relevant topics for you</Typography>
              </Paper>
              <ul>
                <li>
                  <Paper>
                    <Typography>Discussion</Typography>
                    <Typography>Nazwa</Typography>
                    <Typography>Tweets: 4141</Typography>
                  </Paper>
                </li>
                <li>
                  <Paper>
                    <Typography>Discussion</Typography>
                    <Typography>Nazwa</Typography>
                    <Typography>Tweets: 4141</Typography>
                  </Paper>
                </li>
                <li>
                  <Paper>
                    <Typography>Discussion</Typography>
                    <Typography>Nazwa</Typography>
                    <Typography>Tweets: 4141</Typography>
                  </Paper>
                </li>
                <li>
                  <Paper>
                    <Typography>Discussion</Typography>
                    <Typography>Nazwa</Typography>
                    <Typography>Tweets: 4141</Typography>
                  </Paper>
                </li>
              </ul>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
