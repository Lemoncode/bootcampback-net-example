import React from 'react';
import { AuthProvider } from '@/core/auth';
import { RouterComponent } from '@/core/router';
import { ThemeProviderComponent } from '@/core/theme';
import './app.global-styles';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProviderComponent>
        <RouterComponent />
      </ThemeProviderComponent>
    </AuthProvider>
  );
};

export default App;
