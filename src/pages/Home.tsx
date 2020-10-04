import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// Icons
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import { makeStyles, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container/Container';

const useHomeStyles = makeStyles((theme) => ({
  sideMenuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    '& li': {
      display: 'flex',
      alignItems: 'center',
      '& h6': {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
      },
      '& svg': {
        fontSize: 28,
      },
    },
  },
}));

const Home = () => {
  const classes = useHomeStyles();
  return (
    <Container style={{ height: '100vh' }} maxWidth='lg'>
      <Grid container spacing={4}>
        <Grid item xs={2}>
          <ul className={classes.sideMenuList}>
            <li>
              <IconButton style={{ margin: '15px 0' }} color='primary'>
                <TwitterIcon style={{ fontSize: 36 }} />
              </IconButton>
            </li>
            <li>
              <IconButton color='default'>
                <SearchIcon />
              </IconButton>
              <Typography variant='h6'>Search</Typography>
            </li>
            <li>
              <IconButton>
                <NotificationIcon />
              </IconButton>
              <Typography variant='h6'>Notifications</Typography>
            </li>
            <li>
              <IconButton>
                <MessageIcon />
              </IconButton>
              <Typography variant='h6'>Messages</Typography>
            </li>
            <li>
              <IconButton>
                <BookmarkIcon />
              </IconButton>
              <Typography variant='h6'>Bookmarks</Typography>
            </li>
            <li>
              <IconButton>
                <ListIcon />
              </IconButton>
              <Typography variant='h6'>List</Typography>
            </li>
            <li>
              <IconButton>
                <UserIcon />
              </IconButton>
              <Typography variant='h6'>Profile</Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={7}>
          <h1>xs</h1>
        </Grid>
        <Grid item xs={3}>
          <h1>xs</h1>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
