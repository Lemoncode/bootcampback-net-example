import React from 'react';
import { switchRoutes } from '@/core/router';
import { Login } from './login.component';

export const LoginContainer: React.FC = () => {
  const handleGoogleLogin = () => {
    window.location.href = switchRoutes.loginGoogle;
  };

  return <Login onLogin={handleGoogleLogin} />;
};
