import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SingleTweet as SingleTweetComponent } from '..';
import {
  clearTweetBuffer,
  fetchTweetData,
} from '../../../store/ducks/singleTweet/actionCreators';
import {
  selectIsLoadingSingleTweetState,
  selectSingleTweet,
} from '../../../store/ducks/singleTweet/selectors';

const SingleTweet: React.FC = () => {
  const dispatch = useDispatch();
  let singleTweet = useSelector(selectSingleTweet);
  const isLoading = useSelector(selectIsLoadingSingleTweetState);
  const params: { id: string } = useParams();
  const id = params.id;

  useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }
    return () => {
      dispatch(clearTweetBuffer());
    };
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      {singleTweet && (
        <SingleTweetComponent body={singleTweet.text} {...singleTweet} />
      )}
    </>
  );
};

export default SingleTweet;
