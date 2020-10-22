import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Icons
import ImageIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/EmojiEmotions';

// Mui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles, Theme } from '@material-ui/core/styles';

// Locals
import { asyncAddTweet } from '../../store/ducks/tweets/actionCreators';
import { selectAddFormStatus } from '../../store/ducks/tweets/selectors';
import Notification from '../Notification';
import { AddFormStatus } from '../../store/ducks/tweets/contracts/state';

interface AddTweetFormProps {
  maxRows?: number;
  minRows?: number;
  disablePadding?: boolean;
}

const useAddTweetFormStyles = makeStyles((theme: Theme) => ({
  addTweetForm: {
    padding: (props: AddTweetFormProps) =>
      props.disablePadding ? '0 0 10px 0' : '13px 20px 10px 20px',
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
  addTweetForm__wrapper: {
    display: 'flex',
  },
}));

// Constans
const MAX_LENGTH = 280;

const AddTweetForm: React.FC<AddTweetFormProps> = ({
  maxRows,
  minRows,
  disablePadding,
}) => {
  // styling
  const classes = useAddTweetFormStyles({ disablePadding });
  // state managment
  const dispatch = useDispatch();
  const addFormStatus = useSelector(selectAddFormStatus);
  const [text, setText] = useState<string>('');
  const [showErrorNotification, setShowErrorNotification] = useState<boolean>(
    false
  );
  // local constnts
  const TEXT_LIMIT_PERCENT = Math.round((text.length / MAX_LENGTH) * 100);
  const lengthLeft = MAX_LENGTH - text.length;

  const handleChangeTextarea = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleAddTweetClick = (e: React.FormEvent): void => {
    e.preventDefault();
    setText('');
    dispatch(asyncAddTweet(text));
  };

  useEffect(() => {
    if (addFormStatus === AddFormStatus.ERROR) {
      setShowErrorNotification(true);
    }
  }, [addFormStatus]);

  return (
    <div className={classes.addTweetForm}>
      <Notification
        show={showErrorNotification}
        message={'Error appeared, tweet cannot be added'}
      />
      <div className={classes.addTweetForm__wrapper}>
        <Avatar
          className={classes.addTweetForm__avatar}
          alt={'Your avatar'}
          src={
            'https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80'
          }
        />
        <div className={classes.addTweetForm__body}>
          <TextareaAutosize
            onChange={handleChangeTextarea}
            className={classes.addTweetForm__textarea}
            placeholder='What is up?'
            value={text}
            rowsMax={maxRows}
            rowsMin={minRows}
          />
        </div>
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
          {text && (
            <>
              <span style={lengthLeft < 0 ? { color: 'red' } : undefined}>
                {lengthLeft}
              </span>
              <div className={classes.addTweetForm__circleProgress}>
                <CircularProgress
                  variant='static'
                  size={20}
                  thickness={5}
                  value={TEXT_LIMIT_PERCENT >= 100 ? 100 : TEXT_LIMIT_PERCENT}
                  style={text.length >= 280 ? { color: 'red' } : undefined}
                />
                <CircularProgress
                  style={{ color: 'rgba(0,0,0,0.1' }}
                  variant='static'
                  size={20}
                  thickness={5}
                  value={100}
                />
              </div>
            </>
          )}
          <Button
            onClick={handleAddTweetClick}
            disabled={
              addFormStatus === AddFormStatus.LOADING ||
              !text ||
              text.length > MAX_LENGTH
            }
            color='primary'
            variant='contained'>
            {addFormStatus === AddFormStatus.LOADING ? (
              <CircularProgress size={16} style={{ padding: 8 }} />
            ) : (
              'Tweet'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTweetForm;
