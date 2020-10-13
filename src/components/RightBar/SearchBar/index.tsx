import React, { useState } from 'react';
import classNames from 'classnames';

import SearchIcon from '@material-ui/icons/SearchOutlined';

import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

const useSearchBarStyles = makeStyles((theme) => ({
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
}));

const CustomSearchBar = () => {
  const classes = useSearchBarStyles();
  const [addFocusClass, setAddFocusClass] = useState(false);
  const focusClass = addFocusClass ? classes.searchBarFocusClass : '';

  const onFocusInput = () => {
    setAddFocusClass(true);
  };
  const onBlurInput = () => {
    setAddFocusClass(false);
  };
  return (
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
  );
};

export default CustomSearchBar;
