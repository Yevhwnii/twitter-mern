import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingState } from '../common/contracts/loadingState';
import { SingleTweetState } from './contracts/state';

const selectSingleTweetState = (state: RootState): SingleTweetState =>
  state.singleTweet;

export const selectSingleTweet = createSelector(
  selectSingleTweetState,
  (singleTweet) => singleTweet.data
);

export const selectLoadingState = (state: RootState) =>
  selectSingleTweetState(state).loadingState;

export const selectIsLoadingSingleTweetState = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsLoadedSingleTweetState = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;
