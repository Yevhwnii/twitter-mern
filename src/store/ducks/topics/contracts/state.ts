export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface Topic {
  _id: string;
  title: string;
  retweets: number;
}

export interface TopicsState {
  items: Topic[];
  loadingState: LoadingState;
}
