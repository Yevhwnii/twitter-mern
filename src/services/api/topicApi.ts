import axios from 'axios';
import { TopicsState } from '../../store/ducks/topics/contracts/state';

export const TopicsApi = {
  fetchTweets: async (): Promise<TopicsState['items']> => {
    const response = await axios.get('/topics');
    return response.data;
  },
};
