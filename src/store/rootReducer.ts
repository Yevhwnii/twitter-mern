import { combineReducers } from 'redux';
import { singleTweetReducer } from './ducks/singleTweet/reducer';
import { topicsReducer } from './ducks/topics/reducer';
import { tweetsReducer } from './ducks/tweets/reducer';

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  topics: topicsReducer,
  singleTweet: singleTweetReducer,
});
