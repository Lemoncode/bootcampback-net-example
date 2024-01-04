import React from 'react';
import { AppLayout } from '@/layouts';
import { BookContainer } from '@/pods/book';

export const BookScene: React.FC = () => {
  return (
    <AppLayout>
      <BookContainer />
    </AppLayout>
  );
};
