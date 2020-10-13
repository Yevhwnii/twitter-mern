import React from 'react';

// MUI
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Local
import { useRightBarStyles } from './theme';
import RightBlockListItem from './ListItem';
import CustomSearchBar from './SearchBar';

const RightBar = () => {
  const classes = useRightBarStyles();

  const array = [
    {
      title: '#HandOffRussianHistory',
      retweets: 44,
    },
    {
      title: '#GitlerCaput',
      retweets: 413133,
    },
    {
      title: '#NoWayYouGay',
      retweets: 22347,
    },
  ];

  return (
    <div className={classes.rightBar}>
      <CustomSearchBar />

      <Paper className={classes.rightBarBlock}>
        <Paper className={classes.rightBlockHeader} variant='outlined'>
          <Typography variant='h6'>Relevant topics for you</Typography>
        </Paper>

        <List>
          {array.map((topic, index) => {
            const showDivider = array.length - 1 !== index;
            return (
              <RightBlockListItem
                showDivider={showDivider}
                primaryText={topic.title}
                secondaryText={topic.retweets.toString()}
              />
            );
          })}
        </List>
      </Paper>

      <Paper className={classes.rightBarBlock}>
        <Paper variant='outlined' className={classes.rightBlockHeader}>
          <Typography variant='h6'>Whom to read</Typography>
        </Paper>
        <List>
          <RightBlockListItem
            primaryText={'Dock of Shame'}
            secondaryText={'FavDockOfShame'}
            avatar={{
              url:
                'https://images.unsplash.com/photo-1584799235813-aaf50775698c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
              alt: 'Remy Sharp',
            }}
          />
        </List>
      </Paper>
    </div>
  );
};

export default RightBar;
