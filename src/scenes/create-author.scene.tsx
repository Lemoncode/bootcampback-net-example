import React from 'react';
import { AppLayout } from '@/layouts';
import { EditAuthorContainer } from '@/pods/edit-author';

export const CreateAuthorScene: React.FC = () => {
  return (
    <AppLayout>
      <EditAuthorContainer />
    </AppLayout>
  );
};