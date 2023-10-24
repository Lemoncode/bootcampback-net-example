import React from 'react';
import { AppLayout } from '@/layouts';
import { DashboardComponent } from '@/pods/dashboard';

export const DasboardScene: React.FC = () => {
  return (
    <AppLayout>
      <DashboardComponent />
    </AppLayout>
  );
};
