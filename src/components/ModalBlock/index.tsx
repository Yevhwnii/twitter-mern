import React from 'react';

import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

interface ModalProps {
  children: React.ReactNode | string;
  wellRounded?: boolean;
  title?: string;
  open: boolean;
  onClose: () => void;
}

const useStyles = makeStyles((theme) => ({
  dialog: {
    '& .MuiPaper-root': {
      width: 750,
      borderRadius: (props: ModalProps) => (props.wellRounded ? 20 : 4),
    },
  },
}));

const ModalBlock: React.FC<ModalProps> = ({
  open,
  title,
  children,
  wellRounded,
  onClose,
}: ModalProps): React.ReactElement | null => {
  const classes = useStyles({ wellRounded });
  if (!open) {
    return null;
  }

  return (
    <Dialog
      className={classes.dialog}
      open={open}
      onClose={onClose}
      aria-labelledby='form-control'>
      <DialogTitle>
        <IconButton onClick={onClose} color='primary'>
          <CloseIcon style={{ fontSize: 26 }} color='primary' />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalBlock;
