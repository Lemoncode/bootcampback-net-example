import React from 'react';
import { useNotificationContext } from '@/core/notification';
import { Login } from './login.component';
import { Credentials } from './login.vm';
import { useAuth } from '@/core/auth';

export const LoginContainer: React.FC = () => {
  const { notify } = useNotificationContext();
  const { onLogin } = useAuth();

  // const handleGoogleLogin = () => {
  //   window.location.href = switchRoutes.loginGoogle;
  // };

  const handleLogin = (credentials: Credentials) =>
    onLogin(credentials.email, credentials.password).then(result => {
      if (!result) {
        notify('Invalid credentials');
      }
    });

  return <Login onLogin={handleLogin} />;
};
