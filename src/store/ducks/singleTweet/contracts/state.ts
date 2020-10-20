import { LoadingState } from '../../common/contracts/loadingState';
import { Tweet } from '../../tweets/contracts/state';

export interface SingleTweetState {
  data?: Tweet;
  loadingState: LoadingState;
}
