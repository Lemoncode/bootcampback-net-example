import React from 'react';
import { cx } from '@emotion/css';
import { Snackbar as SnackbarMUI, SnackbarProps as SnackbarMUIProps, Portal, Alert, AlertProps } from '@mui/material';
import * as innerClasses from './snackbar.styles';

interface SnackbarProps extends SnackbarMUIProps {
  severity?: AlertProps['severity'];
}

export const Snackbar: React.FC<SnackbarProps> = props => {
  const { onClose, severity, children, className, ...rest } = props;
  const handleClose = event => reason => {
    if (reason === 'clickaway') {
      return;
    }

    onClose(event, reason);
  };

  return (
    <Portal>
      <SnackbarMUI {...rest} className={cx(innerClasses.root, className)} onClose={onClose}>
        <Alert onClose={handleClose('close')} severity={severity}>
          {children}
        </Alert>
      </SnackbarMUI>
    </Portal>
  );
};

Snackbar.defaultProps = {
  anchorOrigin: { vertical: 'top', horizontal: 'right' },
};
