import React from 'react';
import { AppLayout } from '@/layouts';
import { BookListContainer } from '@/pods/book-list';

export const BookListScene: React.FC = () => {
  return (
    <AppLayout>
      <BookListContainer />
    </AppLayout>
  );
};
