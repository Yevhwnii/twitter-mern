import { Action } from 'redux';
import { LoadingState, Topic } from './contracts/state';
import { TopicsState } from './contracts/state';

export enum TopicsActionType {
  SET_TOPICS = 'topics/SET_TOPICS',
  FETCH_TOPICS = 'topics/FETCH_TOPICS',
  SET_LOADING_STATE = 'topics/SET_LOADING_STATE',
}

interface SetTopicsActionInterface extends Action<TopicsActionType> {
  type: TopicsActionType.SET_TOPICS;
  payload: TopicsState['items'];
}

interface FetchTopicsActionInterface extends Action<TopicsActionType> {
  type: TopicsActionType.FETCH_TOPICS;
}

interface SetLoadingStateActionInterface extends Action<TopicsActionType> {
  type: TopicsActionType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const setTopics = (payload: Topic[]): SetTopicsActionInterface => ({
  type: TopicsActionType.SET_TOPICS,
  payload,
});

export const fetchTopics = (): FetchTopicsActionInterface => ({
  type: TopicsActionType.FETCH_TOPICS,
});

export const setTopicsLoadingState = (
  payload: LoadingState
): SetLoadingStateActionInterface => ({
  type: TopicsActionType.SET_LOADING_STATE,
  payload,
});

export type TopicActions =
  | SetTopicsActionInterface
  | FetchTopicsActionInterface
  | SetLoadingStateActionInterface;
