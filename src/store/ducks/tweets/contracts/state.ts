import { LoadingState } from '../../common/contracts/loadingState';

export interface Tweet {
  _id: string;
  text: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export interface TweetsState {
  items: Tweet[];
  loadingState: LoadingState;
}
