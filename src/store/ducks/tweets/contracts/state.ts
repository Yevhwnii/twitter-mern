import { LoadingState } from '../../common/contracts/loadingState';

export enum AddFormStatus {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  FINISHED = 'FINISHED',
}

export interface Tweet {
  _id: string;
  text: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
  createdAt: Date;
}

export interface TweetsState {
  items: Tweet[];
  loadingState: LoadingState;
  addTweetStatus: AddFormStatus;
}
