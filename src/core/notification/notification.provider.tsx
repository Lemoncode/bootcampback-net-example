import React from 'react';
import { Snackbar } from '@/common/components';
import { NotificationContext } from './notification.context';
import { NotificationInfo, createEmptyNotificationInfo } from './notification.model';
import { NotificationDialog } from './notification-dialog.component';

const useNotification = () => {
  const [state, setState] = React.useState<NotificationInfo>(createEmptyNotificationInfo);

  const notify = (message: string, variant: NotificationInfo['variant'] = 'info', autoHideDuration: number = 5000) => {
    setState({
      open: true,
      message: message,
      variant: variant,
      autoHideDuration,
    });
  };

  const close = () => {
    setState(current => ({ ...current, open: false }));
  };

  return { notify, close, state };
};

interface Props {
  children: React.ReactNode;
}

export const NotificationProvider: React.FC<Props> = ({ children }) => {
  const notification = useNotification();

  return (
    <NotificationContext.Provider value={notification}>
      {notification.state.open && notification.state.variant === 'critical' ? (
        <NotificationDialog open={notification.state.open} onClose={notification.close}>
          {notification.state.message}
        </NotificationDialog>
      ) : (
        <Snackbar
          open={notification.state.open}
          severity={notification.state.variant as 'error' | 'success' | 'info'}
          onClose={notification.close}
          autoHideDuration={notification.state.autoHideDuration}
        >
          <>{notification.state.message}</>
        </Snackbar>
      )}
      {children}
    </NotificationContext.Provider>
  );
};
