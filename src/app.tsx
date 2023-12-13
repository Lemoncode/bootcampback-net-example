import React from 'react';
import { SpinnerComponent } from '@/common/components';
import { AuthProvider } from '@/core/auth';
import { RouterComponent } from '@/core/router';
import { ThemeProviderComponent } from '@/core/theme';
import './app.global-styles';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProviderComponent>
        <SpinnerComponent />
        <RouterComponent />
      </ThemeProviderComponent>
    </AuthProvider>
  );
};

export default App;
