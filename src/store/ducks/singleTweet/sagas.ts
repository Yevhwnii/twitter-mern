import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetApi';
import { LoadingState } from '../common/contracts/loadingState';
import { setSingleTweetLoadingState, setTweetData } from './actionCreators';
import {
  FetchTweetDataActionInterface,
  SingleTweetActionsType,
} from './contracts/actionTypes';

export function* fetchSingleTweetRequest({
  payload: id,
}: FetchTweetDataActionInterface) {
  try {
    const tweet = yield call(TweetsApi.fetchSingleTweet, id);
    yield put(setTweetData(tweet));
  } catch (error) {
    yield put(setSingleTweetLoadingState(LoadingState.ERROR));
  }
}

export function* singleTweetSaga() {
  yield takeLatest(
    SingleTweetActionsType.FETCH_TWEET_DATA,
    fetchSingleTweetRequest
  );
}
