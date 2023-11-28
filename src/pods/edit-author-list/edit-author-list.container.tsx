import React from 'react';
import { INITIAL_PAGE, PAGE_SIZE } from './edit-author-list.constants';
import { mapAuthorListFromApiToVm } from './edit-author-list.mappers';
import { EditAuthorList } from './edit-author-list.component';
import { Author } from './edit-author-list.vm';
import * as api from './api';

export const EditAuthorListContainer: React.FC = () => {
  const [totalRows, setTotalRows] = React.useState<number>(0);
  const [authorList, setAuthorList] = React.useState<Author[]>([]);

  React.useEffect(() => {
    api
      .getEditAuthorList({
        page: INITIAL_PAGE,
        pageSize: PAGE_SIZE,
      })
      .then(resp => {
        setAuthorList(mapAuthorListFromApiToVm(resp.results));
        setTotalRows(resp.paginationInfo.totalRows);
      });
  }, []);

  return <EditAuthorList totalRows={totalRows} authorList={authorList} />;
};
