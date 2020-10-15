import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHomeStyles } from './theme';

// Local
import Tweet from '../../components/Tweet';
import AddTweetForm from '../../components/AddTweetForm';
import SideMenu from '../../components/SideMenu';
import RightBar from '../../components/RightBar';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import {
  selectIsLoadingTweetsState,
  selectTweets,
} from '../../store/ducks/tweets/selectors';
import { fetchTopics } from '../../store/ducks/topics/actionCreators';

// Material UI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { CircularProgress } from '@material-ui/core';
import { Route } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

const Home = () => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweets);
  const isTweetsLoading = useSelector(selectIsLoadingTweetsState);

  useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTopics());
  }, [dispatch]);

  return (
    <Container
      className={classes.container}
      style={{ height: '100vh', maxWidth: '1400px' }}
      maxWidth='lg'>
      <Grid style={{ height: '100%' }} container spacing={4}>
        <Grid item xs={1} md={3}>
          <SideMenu />
        </Grid>
        <Grid item xs={8} md={6}>
          <Paper square className={classes.tweetsWrapper} variant='outlined'>
            <PageHeader />
            <Route path={['/home', '/home/search']} exact>
              <Paper>
                <AddTweetForm />
                <div className={classes.addTweetForm__footer__line} />
              </Paper>
            </Route>
            <Route path='/home' exact>
              {isTweetsLoading ? (
                <div style={{ textAlign: 'center', marginTop: 50 }}>
                  <CircularProgress />
                </div>
              ) : (
                tweets.map((tweet) => (
                  <Tweet
                    _id={tweet._id}
                    key={tweet._id}
                    body={tweet.text}
                    user={tweet.user}
                  />
                ))
              )}
            </Route>
          </Paper>
        </Grid>
        <Grid item xs={3} md={3}>
          <RightBar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
