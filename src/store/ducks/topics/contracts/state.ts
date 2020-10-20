import { LoadingState } from '../../common/contracts/loadingState';

export interface Topic {
  _id: string;
  title: string;
  retweets: number;
}

export interface TopicsState {
  items: Topic[];
  loadingState: LoadingState;
}
