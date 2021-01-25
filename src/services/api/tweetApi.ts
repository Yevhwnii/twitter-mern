import { axios } from '../../core/axios';
import { SingleTweetState } from '../../store/ducks/singleTweet/contracts/state';
import { Tweet, TweetsState } from '../../store/ducks/tweets/contracts/state';

export const TweetsApi = {
  fetchTweets: async (): Promise<TweetsState['items']> => {
    const response = await axios.get('/tweets');
    return response.data;
  },
  fetchSingleTweet: async (id: string): Promise<SingleTweetState['data']> => {
    const response = await axios.get(`/tweets/${id}`);
    return response.data;
  },
  addTweet: async (payload: string): Promise<Tweet> => {
    const response = await axios.post('/tweets', { text: payload });
    return response.data;
  },
};
