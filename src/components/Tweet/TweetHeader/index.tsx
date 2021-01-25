import React from 'react';

// MUI
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import { formatDate } from '../../../utils/formatDate';

interface TweetHeaderProps {
  user: {
    fullname: string;
    username: string;
  };
  singleTweet?: boolean;
  createdAt: Date;
}

export const GreySpan = ({ children, singleTweet }: any) => {
  const styles = singleTweet
    ? {
        color: grey[500],
      }
    : {
        color: grey[500],
        marginLeft: 4,
      };
  return <span style={styles}>{children}</span>;
};

const TweetHeader: React.FC<TweetHeaderProps> = ({
  user,
  singleTweet,
  createdAt,
}) => {
  return (
    <Typography style={singleTweet ? { marginLeft: 15 } : undefined}>
      <b>{user.fullname}</b>{' '}
      {singleTweet && (
        <GreySpan> • {formatDate(new Date(createdAt))} ago</GreySpan>
      )}
      {singleTweet && <br />}
      <GreySpan singleTweet>
        @{user.username} • {!singleTweet && formatDate(new Date(createdAt))} ago
      </GreySpan>
    </Typography>
  );
};

export default TweetHeader;
