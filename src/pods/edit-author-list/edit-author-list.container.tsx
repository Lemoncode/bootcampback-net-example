import React from 'react';
import { EditAuthorList } from './edit-author-list.component';
import { mapAuthorListFromApiToVm } from './edit-author-list.mappers';
import * as api from './api';
import { usePagination } from './edit-author-list.hook';

export const EditAuthorListContainer: React.FC = () => {
  const [authorList, setAuthorList] = React.useState<api.Author[]>([]);
  const pageSize = 10;
  const { page, changePage } = usePagination();

  const handlePageChange = (page: number) => {
    changePage(page + 1);
    api
      .getAuthorList(page + 1, 10)
      .then(mapAuthorListFromApiToVm)
      .then(setAuthorList);
  };

  React.useEffect(() => {
    try {
      api.getAuthorList(page, pageSize).then(mapAuthorListFromApiToVm).then(setAuthorList);
    } catch (error) {
      throw error;
    }
  }, [page, pageSize]);

  return <EditAuthorList authorList={authorList} page={page} onPageChange={handlePageChange} />;
};
