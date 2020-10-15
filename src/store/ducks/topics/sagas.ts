import { call, put, takeLatest } from 'redux-saga/effects';
import { TopicsApi } from '../../../services/api/topicApi';
import {
  setTopics,
  setTopicsLoadingState,
  TopicsActionType,
} from './actionCreators';
import { LoadingState } from './contracts/state';

export function* fetchTopicsRequest() {
  try {
    const topics = yield call(TopicsApi.fetchTweets);
    yield put(setTopics(topics));
  } catch (error) {
    yield put(setTopicsLoadingState(LoadingState.ERROR));
  }
}

export function* topicsSaga() {
  yield takeLatest(TopicsActionType.FETCH_TOPICS, fetchTopicsRequest);
}
