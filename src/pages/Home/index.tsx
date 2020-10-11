import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { useHomeStyles } from './theme';

// Local
import Tweet from '../../components/Tweet';
import AddTweetForm from '../../components/AddTweetForm';
import SideMenu from '../../components/SideMenu';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { selectIsLoadingTweetsState, selectTweets } from '../../store/ducks/tweets/selectors';

// Material UI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container/Container';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper/Paper';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { StylesProvider } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';



const Home = () => {
  const classes = useHomeStyles();
   const dispatch = useDispatch()
   const tweets = useSelector(selectTweets)
   const isLoading = useSelector(selectIsLoadingTweetsState)

   useEffect(() => {
     dispatch(fetchTweets())
   }, [dispatch])

  const [addFocusClass, setAddFocusClass] = useState(false);
  const focusClass = addFocusClass ? classes.searchBarFocusClass : '';

  const onFocusInput = () => {
    setAddFocusClass(true);
  };
  const onBlurInput = () => {
    setAddFocusClass(false);
  };
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
              {isLoading ? <div style={{textAlign: 'center', marginTop: 50}}><CircularProgress/></div> : tweets.map(tweet =>
                  <Tweet
                  key={tweet._id}
                    body={tweet.text}
                    user={tweet.user}
                  />
                )
              }
            </Paper>
          </Grid>
          <Grid item xs={3} md={3}>
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

              <Paper className={classes.rightBarBlock}>
                <Paper className={classes.rightBlockHeader} variant='outlined'>
                  <Typography variant='h6'>Relevant topics for you</Typography>
                </Paper>

                <List>
                  <ListItem className={classes.rightBlockListItem}>
                    <ListItemText
                      primary='#coronavirus'
                      secondary='Tweets: 311 333'
                    />
                  </ListItem>
                  <Divider component='li' />
                  <ListItem className={classes.rightBlockListItem}>
                    <ListItemText
                      primary='#uzbekistan'
                      secondary='Tweets: 5011'
                    />
                  </ListItem>
                  <Divider component='li' />
                  <ListItem className={classes.rightBlockListItem}>
                    <ListItemText
                      primary='#poland'
                      secondary='Tweets: 41 421'
                    />
                  </ListItem>
                </List>
              </Paper>

              <Paper className={classes.rightBarBlock}>
                <Paper variant='outlined' className={classes.rightBlockHeader}>
                  <Typography variant='h6'>Whom to read</Typography>
                </Paper>
                <List>
                  <ListItem className={classes.rightBlockListItem}>
                    <ListItemAvatar>
                      <Avatar
                        alt='Remy Sharp'
                        src='https://images.unsplash.com/photo-1584799235813-aaf50775698c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary='Dock of Shame'
                      secondary='@FavDockOfShame'
                    />
                    <Button color='primary'>
                      <PersonAddIcon />
                    </Button>
                  </ListItem>
                  <Divider component='li' />
                </List>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Container>
    </StylesProvider>
  );
};

export default Home;
