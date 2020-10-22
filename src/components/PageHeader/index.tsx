import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import ArrowIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core';

const usePageHeaderStyles = makeStyles(() => ({
  modifiedHeader: {
    display: 'flex',
    alignItems: 'center',
    '& button': {
      marginRight: 20,
    },
  },
}));

const PageHeader: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const [header, setHeader] = useState('');
  const [showArrow, setShowArrow] = useState(false);
  const classes = usePageHeaderStyles();

  const queryParam = new URLSearchParams(location.search).get('q');
  const tweetRegEx = /\/home\/tweet\/[A-Z,a-z,0-9]*/;

  useEffect(() => {
    switch (location.pathname + location.search) {
      case '/home':
        setHeader('Home page');
        setShowArrow(false);
        break;
      case `/home/search?q=${queryParam}`:
        setHeader('Topics');
        setShowArrow(true);
        break;
      default:
        if (tweetRegEx.test(location.pathname)) {
          setHeader('Tweet');
          setShowArrow(true);
        }
        break;
    }
  }, [location, tweetRegEx, queryParam]);

  const handleButton = () => {
    history.goBack();
  };

  if (showArrow) {
    return (
      <Paper
        style={{ padding: '1px 15px' }}
        className='header'
        square
        variant='outlined'>
        <div className={classes.modifiedHeader}>
          <IconButton onClick={handleButton} color='primary'>
            <ArrowIcon color='primary' />
          </IconButton>
          <Typography variant='h6'>{header}</Typography>
        </div>
      </Paper>
    );
  }
  return (
    <Paper className='header' square variant='outlined'>
      <Typography variant='h6'>{header}</Typography>
    </Paper>
  );
};

export default PageHeader;
