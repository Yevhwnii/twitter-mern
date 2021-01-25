import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetApi';
import { LoadingState } from '../common/contracts/loadingState';
import {
  addTweet,
  setAddFormStatus,
  setTweets,
  setTweetsLoadingState,
} from './actionCreators';
import {
  AsyncAddTweetActionInterface,
  TweetActionTypes,
} from './contracts/actionTypes';
import { AddFormStatus } from './contracts/state';

export function* fetchTweetsRequest() {
  try {
    const tweets = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(tweets.data));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* addTweetRequest({
  payload: text,
}: AsyncAddTweetActionInterface) {
  try {
    const tweet = yield call(TweetsApi.addTweet, text);

    yield put(addTweet(tweet.data));
  } catch (error) {
    yield put(setAddFormStatus(AddFormStatus.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetActionTypes.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetActionTypes.ASYNC_ADD_TWEET, addTweetRequest);
}
