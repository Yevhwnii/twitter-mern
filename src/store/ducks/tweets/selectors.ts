import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingState } from '../common/contracts/loadingState';
import { TweetsState } from './contracts/state';

const selectTweetState = (state: RootState): TweetsState => state.tweets;

export const selectTweets = createSelector(
  selectTweetState,
  (tweets) => tweets.items
);

export const selectLoadingState = (state: RootState) =>
  selectTweetState(state).loadingState;

export const selectIsLoadingTweetsState = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsLoadedTweetsState = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;
