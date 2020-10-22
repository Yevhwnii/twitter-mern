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
import { AddFormStatus, Tweet } from './contracts/state';

export function* fetchTweetsRequest() {
  try {
    const tweets = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(tweets));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* addTweetRequest({ payload }: AsyncAddTweetActionInterface) {
  try {
    const data: Tweet = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullname: 'Test User',
        username: 'test',
        avatarUrl: 'https://source.unsplash.com/random/100x100?3',
      },
    };
    const tweet = yield call(TweetsApi.addTweet, data);
    yield put(addTweet(tweet));
  } catch (error) {
    yield put(setAddFormStatus(AddFormStatus.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetActionTypes.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetActionTypes.ASYNC_ADD_TWEET, addTweetRequest);
}
