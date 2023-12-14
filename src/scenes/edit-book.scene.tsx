import React from 'react';
import { AppLayout } from '@/layouts';
import { EditBookContainer } from '@/pods/edit-book';

export const EditBookScene: React.FC = () => {
  return (
    <AppLayout>
      <EditBookContainer isEditMode />
    </AppLayout>
  );
};
