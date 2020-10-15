import produce, { Draft } from 'immer';
import { TopicActions } from './actionCreators';
import { LoadingState, TopicsState } from './contracts/state';
import { TopicsActionType } from './actionCreators';

const initialState: TopicsState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const topicsReducer = produce(
  (draft: Draft<TopicsState>, action: TopicActions) => {
    switch (action.type) {
      case TopicsActionType.SET_TOPICS:
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;
      case TopicsActionType.FETCH_TOPICS:
        draft.items = [];
        draft.loadingState = LoadingState.LOADING;
        break;

      case TopicsActionType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;

      default:
        break;
    }
  },
  initialState
);
