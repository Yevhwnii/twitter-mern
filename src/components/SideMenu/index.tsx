import React from 'react';

// Local
import SideMenuItem from './SideMenuItem';
// MUI
import { Button, makeStyles } from '@material-ui/core';

// Icons
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';

const useSideMenuStyles = makeStyles((theme) => ({
  sideMenuList: {
    listStyle: 'none',
    padding: 0,
    paddingLeft: 70,
    margin: 0,
    '& li': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  sideMenuLogo: {
    margin: '15px 0',
    '&  svg': {
      fontSize: 42,
    },
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2),
  },
}));

const SideMenu = () => {
  const classes = useSideMenuStyles();
  return (
    <ul className={classes.sideMenuList}>
      <IconButton className={classes.sideMenuLogo} color='primary'>
        <TwitterIcon color='primary' />
      </IconButton>

      <SideMenuItem label='Search' labelVariant='h6'>
        <SearchIcon />
      </SideMenuItem>

      <SideMenuItem label='Notifications' labelVariant='h6'>
        <NotificationIcon />
      </SideMenuItem>

      <SideMenuItem label='Messages' labelVariant='h6'>
        <MessageIcon />
      </SideMenuItem>

      <SideMenuItem label='Bookmarks' labelVariant='h6'>
        <BookmarkIcon />
      </SideMenuItem>

      <SideMenuItem label='List' labelVariant='h6'>
        <ListIcon />
      </SideMenuItem>

      <SideMenuItem label='Profile' labelVariant='h6'>
        <UserIcon />
      </SideMenuItem>

      <li>
        <Button
          className={classes.sideMenuTweetButton}
          color='primary'
          fullWidth
          variant='contained'>
          Tweet
        </Button>
      </li>
    </ul>
  );
};

export default SideMenu;
