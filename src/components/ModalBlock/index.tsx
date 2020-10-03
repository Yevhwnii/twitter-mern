import React from 'react';

import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  open,
  title,
  children,
  onClose,
}: ModalProps): React.ReactElement | null => {
  if (!open) {
    return null;
  }
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby='form-control'>
      <DialogTitle>
        <IconButton onClick={onClose} color='secondary'>
          <CloseIcon style={{ fontSize: 26 }} color='secondary' />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
