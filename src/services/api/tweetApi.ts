import axios from 'axios';
import { SingleTweetState } from '../../store/ducks/singleTweet/contracts/state';
import { TweetsState } from '../../store/ducks/tweets/contracts/state';

export const TweetsApi = {
  fetchTweets: async (): Promise<TweetsState['items']> => {
    const response = await axios.get('/tweets');
    return response.data;
  },
  fetchSingleTweet: async (id: string): Promise<SingleTweetState['data']> => {
    const response = await axios.get(`/tweets?_id=${id}`);
    return response.data[0];
  },
};
