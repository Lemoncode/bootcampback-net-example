import React from 'react';
import { useParams } from 'react-router-dom';
import { AppLayout } from '@/layouts';
import { EditAuthorContainer } from '@/pods/edit-author';

export const EditAuthorScene: React.FC = () => {
  const { id } = useParams();
  return (
    <AppLayout>
      <EditAuthorContainer id={id} />
    </AppLayout>
  );
};
