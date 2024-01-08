import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { createEmptyConfirmationDialogLabelProps, ConfirmationDialogLabelProps } from './confirmation-dialog.vm';

interface Props {
  isOpen: boolean;
  title: string | React.ReactNode;
  labels: ConfirmationDialogLabelProps;
  onClose: () => void;
  onAccept?: (event) => void;
  className?: string;
  children?: React.ReactNode;
}

export const ConfirmationDialog: React.FC<Props> = props => {
  const { isOpen, title, labels, onAccept, onClose, className, children } = props;

  const innerLabels = {
    ...createEmptyConfirmationDialogLabelProps(),
    ...labels,
  };
  const handleAccept = event => {
    onAccept(event);
    onClose();
  };

  return (
    <Dialog open={isOpen} className={className} TransitionProps={{ unmountOnExit: true }}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" variant="contained">
          {innerLabels.closeButton}
        </Button>
        <Button onClick={handleAccept} color="primary" variant="contained">
          {innerLabels.acceptButton}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ConfirmationDialog.defaultProps = {
  labels: createEmptyConfirmationDialogLabelProps(),
};
