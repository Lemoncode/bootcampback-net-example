import React from 'react';
import { AppLayout } from '@/layouts';
import { EditBook } from '@/pods/edit-book';

export const EditBookScene: React.FC = () => {
  return (
    <AppLayout>
      <EditBook isEditMode={true} />
    </AppLayout>
  );
};
