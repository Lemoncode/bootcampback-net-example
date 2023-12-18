import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface Props {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export const NotificationDialog: React.FC<Props> = props => {
  const { children, open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Se ha producido un error</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};
