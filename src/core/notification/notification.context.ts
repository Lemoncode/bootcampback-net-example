import React from 'react';
import { NotificationContextModel } from './notification.model';

export const NotificationContext = React.createContext<NotificationContextModel>(null);

export const useNotificationContext = () => React.useContext(NotificationContext);
