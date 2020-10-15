import React from 'react';

// MUI
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Local
import { useRightBarStyles } from './theme';
import RightBlockListItem from './ListItem';
import CustomSearchBar from './SearchBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux';
import {
  selectIsLoadingTopicsState,
  selectTopics,
} from '../../store/ducks/topics/selectors';

interface RightBarProps {}

const RightBar: React.FC<RightBarProps> = () => {
  const classes = useRightBarStyles();

  const isTopicsLoading = useSelector(selectIsLoadingTopicsState);
  const topics = useSelector(selectTopics);

  return (
    <div className={classes.rightBar}>
      <CustomSearchBar />

      <Paper className={classes.rightBarBlock}>
        <Paper className={classes.rightBlockHeader} variant='outlined'>
          <Typography variant='h6'>Relevant topics for you</Typography>
        </Paper>

        {!isTopicsLoading ? (
          <List>
            {topics.map((topic, index) => {
              const showDivider = topics.length - 1 !== index;
              const titleWithOutHashTag = topic.title.replace('#', '');
              return (
                <RightBlockListItem
                  to={`/search?q=${titleWithOutHashTag}`}
                  key={topic.title}
                  showDivider={showDivider}
                  primaryText={topic.title}
                  secondaryText={topic.retweets.toString()}
                />
              );
            })}
          </List>
        ) : (
          <div style={{ textAlign: 'center', padding: '50px 0' }}>
            <CircularProgress />
          </div>
        )}
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
