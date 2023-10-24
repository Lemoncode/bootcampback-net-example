import React from 'react';
import { AppLayout } from '@/layouts';
import { Book } from '@/pods/book';

export const BookScene: React.FC = () => {
  return (
    <AppLayout>
      <Book />
    </AppLayout>
  );
};
