import produce, { Draft } from 'immer';
import { TweetActionTypes, TweetsActions } from './actionCreators';
import { TweetsState, LoadingState } from './contracts/state';

const initialTweetsState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
 
  switch (action.type) {
    case TweetActionTypes.SET_TWEETS:
      draft.items = action.payload
      draft.loadingState = LoadingState.LOADED
      break;
    case TweetActionTypes.SET_LOADING_STATE:
      draft.items = []
      draft.loadingState = action.payload
      break
    case TweetActionTypes.FETCH_TWEETS:
    draft.loadingState = LoadingState.LOADING
      break
    default:
      break;
  }

},
initialTweetsState);
