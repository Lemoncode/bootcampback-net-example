import React from 'react';
import { AppLayout } from '@/layouts';
import { EditBookListComponent } from '@/pods/edit-book-list';

export const EditBookListScene: React.FC = () => {
  return (
    <AppLayout>
      <EditBookListComponent />
    </AppLayout>
  );
};
