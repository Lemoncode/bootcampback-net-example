import { AppLayout } from '@/layouts';
import { EditAuthorContainer } from '@/pods/edit-author';
import React from 'react';

export const EditAuthorScene: React.FC = () => {
  return (
    <AppLayout>
      <EditAuthorContainer isEditingMode />
    </AppLayout>
  );
};
