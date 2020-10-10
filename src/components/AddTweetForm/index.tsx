import React from 'react';

// Icons
import ImageIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/EmojiEmotions';

// Mui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';

interface AddTweetFormProps {}

const useAddTweetFormStyles = makeStyles((theme) => ({
  addTweetForm: {
    padding: '13px 20px 10px 20px',
  },

  addTweetForm__body: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },

  addTweetForm__footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  addTweetForm__footer__actions: {
    marginTop: 10,
    paddingLeft: 60,
  },

  addTweetForm__textarea: {
    width: '100%',
    border: 0,
    fontSize: 20,
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'none',
  },

  addTweetForm__footer__line: {
    height: 12,
    backgroundColor: '#E6ECF0',
  },

  addTweetForm__circleProgress: {
    position: 'relative',
    width: 20,
    height: 20,
    margin: '0 10px',
    '& .MuiCircularProgress-root': {
      position: 'absolute',
    },
  },

  addTweetForm__footer__right: {
    display: 'flex',
    alignItems: 'center',
  },

  addTweetForm__avatar: {
    height: theme.spacing(7),
    width: theme.spacing(7),
    marginRight: 12,
  },
}));

const AddTweetForm: React.FC<AddTweetFormProps> = () => {
  const classes = useAddTweetFormStyles();
  return (
    <div className={classes.addTweetForm}>
      <div className={classes.addTweetForm__body}>
        <Avatar
          className={classes.addTweetForm__avatar}
          alt={'Your avatar'}
          src={
            'https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80'
          }
        />
        <TextareaAutosize
          className={classes.addTweetForm__textarea}
          placeholder='What is up?'
        />
      </div>

      <div className={classes.addTweetForm__footer}>
        <div className={classes.addTweetForm__footer__actions}>
          <IconButton color='primary'>
            <ImageIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color='primary'>
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addTweetForm__footer__right}>
          <span>280</span>
          <div className={classes.addTweetForm__circleProgress}>
            <CircularProgress variant='static' size={20} value={20} />
            <CircularProgress
              style={{ color: 'rgba(0,0,0,0.1' }}
              variant='static'
              size={20}
              thickness={4}
              value={100}
            />
          </div>
          <Button color='primary' variant='contained'>
            Tweet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTweetForm;
