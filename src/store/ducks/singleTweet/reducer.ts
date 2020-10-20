import produce, { Draft } from 'immer';
import { SingleTweetState } from './contracts/state';
import { LoadingState } from '../common/contracts/loadingState';
import {
  SingleTweetActions,
  SingleTweetActionsType,
} from './contracts/actionTypes';

const initialState: SingleTweetState = {
  data: undefined,
  loadingState: LoadingState.NEVER,
};

export const singleTweetReducer = produce(
  (draft: Draft<SingleTweetState>, action: SingleTweetActions) => {
    switch (action.type) {
      case SingleTweetActionsType.SET_TWEET_DATA:
        draft.data = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;
      case SingleTweetActionsType.FETCH_TWEET_DATA:
        draft.data = undefined;
        draft.loadingState = LoadingState.LOADING;
        break;
      case SingleTweetActionsType.CLEAR_BUFFER:
        draft.data = undefined;
        break;
      case SingleTweetActionsType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;

      default:
        break;
    }
  },
  initialState
);
