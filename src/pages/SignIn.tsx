import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormGroup,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import PeopleOutlineIcon from '@material-ui/icons/PeopleAltOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import ModalBlock from '../components/ModalBlock';

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    backgroundColor: '#71C9F8',
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    '& > svg': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '350%',
      height: '350%',
      transform: 'translate(-50%, -50%)',
    },
  },
  blueSideList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    position: 'relative',
    width: '380px',
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    },
    '& svg': {
      fontSize: 32,
      marginRight: 15,
    },
    '& li': {
      marginBottom: 40,
    },
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: '380px',
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: '32px',
    marginBottom: '30px',
    marginTop: '20px',
  },
  loginSideFormField: {
    marginBottom: theme.spacing(2),
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
}));

const SignIn = () => {
  const classes = useStylesSignIn();

  const [openModalBlock, setOpenModalBlock] = useState<'signIn' | 'signUp'>();

  const handleOpenModalBlockSignIn = () => {
    setOpenModalBlock('signIn');
  };
  const handleOpenModalBlockSignUp = () => {
    setOpenModalBlock('signUp');
  };

  const handleCloseModalBlock = () => {
    setOpenModalBlock(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color='primary' className={classes.loginSideTwitterIcon} />
        <ul className={classes.blueSideList}>
          <li>
            <Typography variant='h6'>
              <SearchIcon />
              Read what is interesting for you!
            </Typography>
          </li>
          <li>
            <Typography variant='h6'>
              <PeopleOutlineIcon />
              Get to know what is discussed!
            </Typography>
          </li>
          <li>
            <Typography variant='h6'>
              <ModeCommentOutlinedIcon />
              Join the community!
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            color='primary'
            className={classes.loginSideTwitterIcon}
          />
          <Typography variant='h4' className={classes.loginSideTitle}>
            Discover what is happening around you
          </Typography>
          <Typography>
            <b>Join Twitter right now!</b>
            <br />
            <br />
          </Typography>
          <Button
            style={{ marginBottom: 20 }}
            variant='contained'
            color='primary'
            onClick={handleOpenModalBlockSignUp}
            fullWidth>
            Sign up
          </Button>
          <Button
            variant='outlined'
            color='primary'
            fullWidth
            onClick={handleOpenModalBlockSignIn}>
            Sign in
          </Button>
          <ModalBlock
            title='Sign In'
            open={openModalBlock === 'signIn'}
            onClose={handleCloseModalBlock}>
            <FormControl component='fieldset' fullWidth>
              <FormGroup aria-label='position' row>
                <TextField
                  className={classes.loginSideFormField}
                  autoFocus
                  id='email'
                  label='Email Address'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='filled'
                  type='email'
                  fullWidth
                />
                <TextField
                  className={classes.loginSideFormField}
                  id='password'
                  label='Password'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='filled'
                  type='password'
                  fullWidth
                />
                <Button
                  className={classes.loginSideFormField}
                  color='primary'
                  variant='contained'
                  fullWidth>
                  Sign In
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
          <ModalBlock
            title='Create an account'
            open={openModalBlock === 'signUp'}
            onClose={handleCloseModalBlock}>
            <FormControl component='fieldset' fullWidth>
              <FormGroup aria-label='position' row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id='name'
                  label='Name'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='filled'
                  type='text'
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  id='email'
                  label='Email'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='filled'
                  type='email'
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  id='password'
                  label='Password'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='filled'
                  type='password'
                  fullWidth
                />
                <Button
                  className={classes.loginSideFormField}
                  color='primary'
                  variant='contained'
                  fullWidth>
                  Continue
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
