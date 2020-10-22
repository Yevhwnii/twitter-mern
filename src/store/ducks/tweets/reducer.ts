import produce, { Draft } from 'immer';
import { LoadingState } from '../common/contracts/loadingState';
import { TweetActionTypes, TweetsActions } from './contracts/actionTypes';
import { AddFormStatus, TweetsState } from './contracts/state';

const initialTweetsState: TweetsState = {
  items: [],
  addTweetStatus: AddFormStatus.NEVER,
  loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce(
  (draft: Draft<TweetsState>, action: TweetsActions) => {
    switch (action.type) {
      case TweetActionTypes.SET_TWEETS:
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;
      case TweetActionTypes.SET_LOADING_STATE:
        draft.items = [];
        draft.loadingState = action.payload;
        break;
      case TweetActionTypes.SET_ADDFORM_STATUS:
        draft.addTweetStatus = action.payload;
        break;
      case TweetActionTypes.FETCH_TWEETS:
        draft.loadingState = LoadingState.LOADING;
        break;
      case TweetActionTypes.ADD_TWEET:
        draft.items.unshift(action.payload);
        draft.addTweetStatus = AddFormStatus.FINISHED;
        break;
      case TweetActionTypes.ASYNC_ADD_TWEET:
        draft.addTweetStatus = AddFormStatus.LOADING;
        break;
      default:
        break;
    }
  },
  initialTweetsState
);
