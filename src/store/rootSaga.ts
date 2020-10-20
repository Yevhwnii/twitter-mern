import { all } from 'redux-saga/effects';
import { singleTweetSaga } from './ducks/singleTweet/sagas';
import { topicsSaga } from './ducks/topics/sagas';
import { tweetsSaga } from './ducks/tweets/sagas';

export function* rootSaga() {
  yield all([tweetsSaga(), topicsSaga(), singleTweetSaga()]);
}
