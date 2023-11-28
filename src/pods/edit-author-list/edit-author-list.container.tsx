import React from 'react';
import { INITIAL_PAGE, PAGE_SIZE } from './edit-author-list.constants';
import { mapAuthorListFromApiToVm } from './edit-author-list.mappers';
import { EditAuthorList } from './edit-author-list.component';
import { Author } from './edit-author-list.vm';
import * as api from './api';

export const EditAuthorListContainer: React.FC = () => {
  const [totalRows, setTotalRows] = React.useState<number>(0);
  const [authorList, setAuthorList] = React.useState<Author[]>([]);
  const loadData = React.useCallback(
    (newPage: number) => {
      api
        .getEditAuthorList({
          page: newPage,
          pageSize: PAGE_SIZE,
        })
        .then(resp => {
          setAuthorList(mapAuthorListFromApiToVm(resp.results));
          setTotalRows(resp.paginationInfo.totalRows);
        });
    },
    [setAuthorList, setTotalRows]
  );

  const handleEdit = (id: string) => {
    console.log(`Edit author ${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(`Delete author ${id}`);
  };

  return (
    <EditAuthorList
      totalRows={totalRows}
      authorList={authorList}
      initialPage={INITIAL_PAGE}
      loadData={loadData}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
