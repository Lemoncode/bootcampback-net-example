import React from 'react';
import { useParams } from 'react-router-dom';
import { AppLayout } from '@/layouts';
import { BookContainer } from '@/pods/book';

export const BookScene: React.FC = () => {
  const { id } = useParams();
  return (
    <AppLayout>
      <BookContainer id={id} />
    </AppLayout>
  );
};
