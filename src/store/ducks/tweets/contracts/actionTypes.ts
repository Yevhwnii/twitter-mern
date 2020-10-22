import { Action } from 'redux';
import { LoadingState } from '../../common/contracts/loadingState';
import { AddFormStatus, Tweet, TweetsState } from './state';

// Name of action types
export enum TweetActionTypes {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
  SET_ADDFORM_STATUS = 'tweets/SET_ADDFORM_STATUS',
  ASYNC_ADD_TWEET = 'tweets/ASYNC_ADD_TWEET',
  ADD_TWEET = 'tweets/ADD_TWEET',
}

// Interface which regulates setTweets action
export interface SetTweetsActionInterface extends Action<TweetActionTypes> {
  type: TweetActionTypes.SET_TWEETS;
  payload: TweetsState['items'];
}

export interface AsyncAddTweetActionInterface extends Action<TweetActionTypes> {
  type: TweetActionTypes.ASYNC_ADD_TWEET;
  payload: string;
}

export interface AddTweetActionInterface extends Action<TweetActionTypes> {
  type: TweetActionTypes.ADD_TWEET;
  payload: Tweet;
}

export interface FetchTweetsActionInterface extends Action<TweetActionTypes> {
  type: TweetActionTypes.FETCH_TWEETS;
}

export interface SetTweetsLoadingStateActionInterface
  extends Action<TweetActionTypes> {
  type: TweetActionTypes.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface SetAddFormStatusActionInterface
  extends Action<TweetActionTypes> {
  type: TweetActionTypes.SET_ADDFORM_STATUS;
  payload: AddFormStatus;
}

// Tweets action available in other files
export type TweetsActions =
  | SetTweetsActionInterface
  | SetTweetsLoadingStateActionInterface
  | SetAddFormStatusActionInterface
  | AsyncAddTweetActionInterface
  | AddTweetActionInterface
  | FetchTweetsActionInterface;
