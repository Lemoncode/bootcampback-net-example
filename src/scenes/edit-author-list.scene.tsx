import React from 'react';
import { AppLayout } from '@/layouts';
import { EditAuthorList } from '@/pods/edit-author-list';

export const EditAuthorListScene: React.FC = () => {
  return (
    <AppLayout>
      <EditAuthorList />
    </AppLayout>
  );
};
