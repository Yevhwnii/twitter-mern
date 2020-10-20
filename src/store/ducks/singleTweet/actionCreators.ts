import { LoadingState } from '../common/contracts/loadingState';
import { Tweet } from '../tweets/contracts/state';
import {
  SetTweetDataActionInterface,
  FetchTweetDataActionInterface,
  SetLoadingStateActionInterface,
  SingleTweetActionsType,
  ClearSingleTweetBufferActionInterface,
} from './contracts/actionTypes';

// Action fucntions

export const setTweetData = (payload: Tweet): SetTweetDataActionInterface => ({
  type: SingleTweetActionsType.SET_TWEET_DATA,
  payload,
});

export const fetchTweetData = (id: string): FetchTweetDataActionInterface => ({
  type: SingleTweetActionsType.FETCH_TWEET_DATA,
  payload: id,
});

export const clearTweetBuffer = (): ClearSingleTweetBufferActionInterface => ({
  type: SingleTweetActionsType.CLEAR_BUFFER,
});

export const setSingleTweetLoadingState = (
  payload: LoadingState
): SetLoadingStateActionInterface => ({
  type: SingleTweetActionsType.SET_LOADING_STATE,
  payload,
});
