import { Action } from 'redux';
import { LoadingState } from '../common/contracts/loadingState';
import { TweetsState } from './contracts/state';

// Name of action types
export enum TweetActionTypes {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
}

// Interface which regulates setTweets action
export interface SetTweetsActionInterface extends Action<TweetActionTypes> {
  type: TweetActionTypes.SET_TWEETS;
  payload: TweetsState['items'];
}

export interface FetchTweetsActionInterface extends Action<TweetActionTypes> {
  type: TweetActionTypes.FETCH_TWEETS;
}

export interface SetTweetsLoadingStateActionInterface
  extends Action<TweetActionTypes> {
  type: TweetActionTypes.SET_LOADING_STATE;
  payload: LoadingState;
}

// Function itself which is returning action object
export const setTweets = (
  payload: TweetsState['items']
): SetTweetsActionInterface => ({
  type: TweetActionTypes.SET_TWEETS,
  payload,
});

export const setTweetsLoadingState = (
  payload: LoadingState
): SetTweetsLoadingStateActionInterface => ({
  type: TweetActionTypes.SET_LOADING_STATE,
  payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetActionTypes.FETCH_TWEETS,
});

// Tweets action available in other files
export type TweetsActions =
  | SetTweetsActionInterface
  | SetTweetsLoadingStateActionInterface
  | FetchTweetsActionInterface;
