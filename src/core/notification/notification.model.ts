export interface NotificationInfo {
  open: boolean;
  message: string;
  variant: 'critical' | 'error' | 'info' | 'success';
  autoHideDuration?: number;
}

export const createEmptyNotificationInfo = (): NotificationInfo => ({
  open: false,
  message: '',
  variant: 'error',
});

export interface NotificationContextModel {
  notify: (message: string, variant?: NotificationInfo['variant'], autoHideDuration?: number) => void;
  close: () => void;
  state: NotificationInfo;
}
