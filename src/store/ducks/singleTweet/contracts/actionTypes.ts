import { Action } from 'redux';
import { LoadingState } from '../../common/contracts/loadingState';
import { Tweet } from '../../tweets/contracts/state';

export enum SingleTweetActionsType {
  SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
  FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
  SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
  CLEAR_BUFFER = 'tweet/CLEAR_BUFFER',
}

// Interfaces

export interface SetTweetDataActionInterface
  extends Action<SingleTweetActionsType> {
  type: SingleTweetActionsType.SET_TWEET_DATA;
  payload: Tweet;
}

export interface FetchTweetDataActionInterface
  extends Action<SingleTweetActionsType> {
  type: SingleTweetActionsType.FETCH_TWEET_DATA;
  payload: string;
}

export interface SetLoadingStateActionInterface
  extends Action<SingleTweetActionsType> {
  type: SingleTweetActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface ClearSingleTweetBufferActionInterface {
  type: SingleTweetActionsType.CLEAR_BUFFER;
}

// Export types

export type SingleTweetActions =
  | SetTweetDataActionInterface
  | FetchTweetDataActionInterface
  | SetLoadingStateActionInterface
  | ClearSingleTweetBufferActionInterface;
