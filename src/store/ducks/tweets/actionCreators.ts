import { LoadingState } from '../common/contracts/loadingState';
import {
  AddTweetActionInterface,
  AsyncAddTweetActionInterface,
  FetchTweetsActionInterface,
  SetAddFormStatusActionInterface,
  SetTweetsActionInterface,
  SetTweetsLoadingStateActionInterface,
  TweetActionTypes,
} from './contracts/actionTypes';
import { AddFormStatus, Tweet, TweetsState } from './contracts/state';

// Function itself which is returning action object
export const setTweets = (
  payload: TweetsState['items']
): SetTweetsActionInterface => ({
  type: TweetActionTypes.SET_TWEETS,
  payload,
});

export const asyncAddTweet = (
  payload: string
): AsyncAddTweetActionInterface => ({
  type: TweetActionTypes.ASYNC_ADD_TWEET,
  payload,
});

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
  type: TweetActionTypes.ADD_TWEET,
  payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetActionTypes.FETCH_TWEETS,
});

export const setTweetsLoadingState = (
  payload: LoadingState
): SetTweetsLoadingStateActionInterface => ({
  type: TweetActionTypes.SET_LOADING_STATE,
  payload,
});

export const setAddFormStatus = (
  payload: AddFormStatus
): SetAddFormStatusActionInterface => ({
  type: TweetActionTypes.SET_ADDFORM_STATUS,
  payload,
});
