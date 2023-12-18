import React from 'react';
import { useNotificationContext } from '@/core/notification';
import { INITIAL_PAGE, PAGE_SIZE } from './edit-author-list.constants';
import { mapAuthorListFromApiToVm } from './edit-author-list.mappers';
import { EditAuthorList } from './edit-author-list.component';
import { Author } from './edit-author-list.vm';
import * as api from './api';

export const EditAuthorListContainer: React.FC = () => {
  const { notify } = useNotificationContext();
  const [totalRows, setTotalRows] = React.useState<number>(0);
  const [authorList, setAuthorList] = React.useState<Author[]>([]);

  const loadData = (newPage: number) => {
    try {
      api
        .getEditAuthorList({
          page: newPage,
          pageSize: PAGE_SIZE,
        })
        .then(resp => {
          setAuthorList(mapAuthorListFromApiToVm(resp.results));
          setTotalRows(resp.paginationInfo.totalRows);
        });
    } catch (error) {
      notify('Error al cargar los autores', 'error');
    }
  };

  const handleDelete = (id: string) => api.deleteAuthor(id).then(() => loadData(INITIAL_PAGE));

  return (
    <EditAuthorList
      totalRows={totalRows}
      authorList={authorList}
      initialPage={INITIAL_PAGE}
      loadData={loadData}
      onDelete={handleDelete}
    />
  );
};
