import React from 'react';
import { EditAuthorList } from './edit-author-list.component';
import { mapAuthorListFromApiToVm } from './edit-author-list.mappers';
import * as api from './api';

export const EditAuthorListContainer: React.FC = () => {
  const [authorList, setAuthorList] = React.useState<api.Author[]>([]);

  React.useEffect(() => {
    try {
      api.getAuthorList(1, 5).then(mapAuthorListFromApiToVm).then(setAuthorList);
    } catch (error) {
      throw error;
    }
  }, []);

  return <EditAuthorList authorList={authorList} />;
};
