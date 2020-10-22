import React, { useEffect, useState } from 'react';

import Snackbar from '@material-ui/core/Snackbar';

interface NotificationProps {
  show: boolean;
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ show, message }) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(show);
  }, [show]);

  const handleClose = () => {
    setOpen(false);
  };
  return <Snackbar open={open} onClose={handleClose} message={message} />;
};

export default Notification;
