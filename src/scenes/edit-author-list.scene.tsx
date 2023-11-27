import React from 'react';
import { AppLayout } from '@/layouts';
import { EditAuthorListContainer } from '@/pods/edit-author-list';

export const EditAuthorListScene: React.FC = () => {
  return (
    <AppLayout>
      <EditAuthorListContainer />
    </AppLayout>
  );
};
