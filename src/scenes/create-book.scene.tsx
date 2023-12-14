import React from 'react';
import { AppLayout } from '@/layouts';
import { EditBookContainer } from '@/pods/edit-book';

export const CreateBookScene: React.FC = () => {
  return (
    <AppLayout>
      <EditBookContainer />
    </AppLayout>
  );
};
