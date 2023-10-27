import React from 'react';
import { AppLayout } from '@/layouts';
import { AddBook } from '@/pods/add-book';

export const NewBookScene: React.FC = () => {
  return (
    <AppLayout>
      <AddBook />
    </AppLayout>
  );
};
