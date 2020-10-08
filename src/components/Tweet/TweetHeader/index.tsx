import React from 'react';

// MUI
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';

interface TweetHeaderProps {
  user: {
    fullname: string;
    username: string;
  };
}

const TweetHeader: React.FC<TweetHeaderProps> = ({ user }) => {
  return (
    <Typography>
      <b>{user.fullname}</b>
      <span style={{ color: grey[500], marginLeft: 5 }}>
        @{user.username} • 2 min
      </span>
    </Typography>
  );
};

export default TweetHeader;
