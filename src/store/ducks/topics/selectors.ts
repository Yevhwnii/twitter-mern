import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingState, TopicsState } from './contracts/state';

const selectTopicsState = (state: RootState): TopicsState => state.topics;

export const selectTopics = createSelector(
  selectTopicsState,
  (topics) => topics.items
);

export const selectLoadingState = (state: RootState) =>
  selectTopicsState(state).loadingState;

export const selectIsLoadingTopicsState = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsLoadedTopicsState = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;
