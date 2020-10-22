import axios from 'axios';
import { SingleTweetState } from '../../store/ducks/singleTweet/contracts/state';
import { Tweet, TweetsState } from '../../store/ducks/tweets/contracts/state';

export const TweetsApi = {
  fetchTweets: async (): Promise<TweetsState['items']> => {
    const response = await axios.get('/tweets?_sort=id&_order=desc');
    return response.data;
  },
  fetchSingleTweet: async (id: string): Promise<SingleTweetState['data']> => {
    const response = await axios.get(`/tweets?_id=${id}`);
    return response.data[0];
  },
  addTweet: async (tweet: Tweet): Promise<Tweet> => {
    const response = await axios.post('/tweets', tweet);
    return response.data;
  },
};
