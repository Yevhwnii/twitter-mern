import React, { useState } from 'react';

// Local
import SideMenuItem from './SideMenuItem';
import ModalBlock from '../ModalBlock';
import AddTweetForm from '../AddTweetForm';

// Icons
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import CreateIcon from '@material-ui/icons/Create';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { useHistory } from 'react-router-dom';

const useSideMenuStyles = makeStyles((theme) => ({
  sideMenuList: {
    position: 'sticky',
    top: 0,
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxWidth: 230,
    '& li': {
      display: 'flex',
      alignItems: 'center',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 70,
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: 15,
    },
  },
  sideMenuLogo: {
    margin: '15px 0',
    '&  svg': {
      fontSize: 42,
    },
  },
  sideMenuTweetButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 35,
    },
    '& button': {
      padding: theme.spacing(3.2),
      marginTop: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        width: 25,
        marginTop: 0,
      },
      width: '100%',
    },
  },
}));

const SideMenu = () => {
  const classes = useSideMenuStyles();
  const history = useHistory();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOnModalClose = () => {
    setOpenModal(false);
  };
  const handleOnModalOpen = () => {
    setOpenModal(true);
  };

  const handleHomePageClick = () => {
    history.push('/home');
  };
  return (
    <ul className={classes.sideMenuList}>
      <IconButton
        onClick={handleHomePageClick}
        className={classes.sideMenuLogo}
        color='primary'>
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

      <li className={classes.sideMenuTweetButton}>
        <Button onClick={handleOnModalOpen} color='primary' variant='contained'>
          <Hidden smDown>Tweet</Hidden>
          <Hidden mdUp>
            <CreateIcon />
          </Hidden>
        </Button>
      </li>
      <ModalBlock wellRounded onClose={handleOnModalClose} open={openModal}>
        <AddTweetForm disablePadding minRows={7} maxRows={15} />
      </ModalBlock>
    </ul>
  );
};

export default SideMenu;
