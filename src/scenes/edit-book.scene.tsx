import React from 'react';
import { AppLayout } from '@/layouts';
// import { EditBook } from '@/pods/edit-book';
import { AddBook } from '@/pods/add-book';

export const EditBookScene: React.FC = () => {
  return (
    <AppLayout>
      <AddBook isEditMode={true} />
    </AppLayout>
  );
};
