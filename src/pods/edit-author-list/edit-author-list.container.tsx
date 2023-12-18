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
