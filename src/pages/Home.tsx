import React, { useState } from 'react';
import classNames from 'classnames';

// Local
import Tweet from '../components/Tweet';
import SideMenu from '../components/SideMenu';
import AddTweetForm from '../components/AddTweetForm';

// Material UI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container/Container';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper/Paper';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import { grey } from '@material-ui/core/colors';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

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
  rightBarBlock: {
    backgroundColor: 'rgb(245,248,250)',
    marginTop: 20,
    borderRadius: 20,
    width: '100%',
    '& .MuiList-root': {
      paddingTop: 0,
    },
  },
  rightBlockHeader: {
    backgroundColor: 'transparent',
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,

    padding: '13px 18px',
    textAlign: 'center',
    '& h6': {
      fontWeight: 800,
      fontSize: 20,
    },
  },

  rightBlockListItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      fontWeight: 700,
    },
    '& .MuiListItemAvatar-root': {
      minWidth: 50,
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
    '&:hover': {
      backgroundColor: '#edf3f6',
    },
  },

  addTweetForm__footer__line: {
    height: 12,
    backgroundColor: '#E6ECF0',
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
        <Grid item xs={8} md={6}>
          <Paper square className={classes.tweetsWrapper} variant='outlined'>
            <Paper className='header' square variant='outlined'>
              <Typography variant='h6'>Home page</Typography>
            </Paper>
            <Paper>
              <AddTweetForm />
              <div className={classes.addTweetForm__footer__line} />
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
                  <ListItemText primary='#poland' secondary='Tweets: 41 421' />
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
  );
};

export default Home;
