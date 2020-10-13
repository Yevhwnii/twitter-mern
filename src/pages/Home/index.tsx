import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHomeStyles } from './theme';

// Local
import Tweet from '../../components/Tweet';
import AddTweetForm from '../../components/AddTweetForm';
import SideMenu from '../../components/SideMenu';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import {
  selectIsLoadingTweetsState,
  selectTweets,
} from '../../store/ducks/tweets/selectors';

// Material UI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container/Container';
import Paper from '@material-ui/core/Paper/Paper';
import Typography from '@material-ui/core/Typography';
import { StylesProvider } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import RightBar from '../../components/RightBar';

const Home = () => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweets);
  const isLoading = useSelector(selectIsLoadingTweetsState);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <StylesProvider injectFirst>
      <Container
        className={classes.container}
        style={{ height: '100vh', maxWidth: '1400px' }}
        maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={1} md={3}>
            <SideMenu />
          </Grid>
          <Grid item xs={8} md={6}>
            <Paper square className={classes.tweetsWrapper} variant='outlined'>
              <Paper className='header' square variant='outlined'>
                <Typography variant='h6'>Home page</Typography>
              </Paper>
              <Paper>
                <AddTweetForm />
                <div className={classes.addTweetForm__footer__line} />
              </Paper>
              {isLoading ? (
                <div style={{ textAlign: 'center', marginTop: 50 }}>
                  <CircularProgress />
                </div>
              ) : (
                tweets.map((tweet) => (
                  <Tweet key={tweet._id} body={tweet.text} user={tweet.user} />
                ))
              )}
            </Paper>
          </Grid>
          <Grid item xs={3} md={3}>
            <RightBar />
          </Grid>
        </Grid>
      </Container>
    </StylesProvider>
  );
};

export default Home;
