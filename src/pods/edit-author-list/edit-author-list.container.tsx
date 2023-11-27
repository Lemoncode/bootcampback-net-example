import React from 'react';
import { EditAuthorList } from './edit-author-list.component';
import { mapAuthorListFromApiToVm } from './edit-author-list.mappers';
import * as api from './api';

export const EditAuthorListContainer: React.FC = () => {
  const [authorList, setAuthorList] = React.useState<api.Author[]>([]);
  const [page, setPage] = React.useState(1);
  const pageSize = 10;
  
  React.useEffect(() => {
    try {
      api.getAuthorList(page, pageSize).then(mapAuthorListFromApiToVm).then(setAuthorList);
    } catch (error) {
      throw error;
    }
  }, [page, pageSize]);

  return <EditAuthorList authorList={authorList} setAuthorList={setAuthorList} page={page} setPage={setPage} />;
};
