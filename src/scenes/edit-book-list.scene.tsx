import React from 'react';
import { AppLayout } from '@/layouts';
import { EditBookList } from '@/pods/edit-book-list';

export const EditBookListScene: React.FC = () => {
  return (
    <AppLayout>
      <EditBookList />
    </AppLayout>
  );
};
