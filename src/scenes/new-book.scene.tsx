import React from 'react';
import { AppLayout } from '@/layouts';
import { NewBook } from '@/pods/new-book';

export const NewBookScene: React.FC = () => {
  return (
    <AppLayout>
      <NewBook />
    </AppLayout>
  );
};
