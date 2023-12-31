import React from 'react';
import { SpinnerComponent } from '@/common/components';
import { AuthProvider } from '@/core/auth';
import { NotificationProvider } from '@/core/notification';
import { RouterComponent } from '@/core/router';
import { ThemeProviderComponent } from '@/core/theme';
import './app.global-styles';

const App: React.FC = () => {
  return (
    <ThemeProviderComponent>
      <NotificationProvider>
        <AuthProvider>
          <SpinnerComponent />
          <RouterComponent />
        </AuthProvider>
      </NotificationProvider>
    </ThemeProviderComponent>
  );
};

export default App;
