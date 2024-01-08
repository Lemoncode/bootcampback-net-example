import React from 'react';
import { useParams } from 'react-router-dom';
import { AppLayout } from '@/layouts';
import { EditBookContainer } from '@/pods/edit-book';

export const EditBookScene: React.FC = () => {
  const { id } = useParams();
  return (
    <AppLayout>
      <EditBookContainer id={id} />
    </AppLayout>
  );
};
