import React from 'react';

// Local
import Tweet from '../components/Tweet';

// Material UI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container/Container';
import TextField from '@material-ui/core/TextField/TextField';
import Paper from '@material-ui/core/Paper/Paper';
import { makeStyles, Typography, withStyles } from '@material-ui/core';

import SideMenu from '../components/SideMenu';

const useHomeStyles = makeStyles(() => ({
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
}));

const SearchTextField = withStyles({
  root: {},
})(TextField);

const Home = () => {
  const classes = useHomeStyles();
  return (
    <Container style={{ height: '100vh', maxWidth: '1400px' }} maxWidth='lg'>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <SideMenu />
        </Grid>
        <Grid item xs={6}>
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
        <Grid item xs={3}>
          <SearchTextField label='Search...' />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
