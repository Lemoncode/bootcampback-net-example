import React from 'react';
import { AppLayout } from '@/layouts';
import { EditBook } from '@/pods/edit-book';

export const NewBookScene: React.FC = () => {
  return (
    <AppLayout>
      <EditBook />
    </AppLayout>
  );
};
