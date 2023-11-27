import React from 'react';
import { EditAuthorList } from './edit-author-list.component';
import { mapAuthorListFromApiToVm } from './edit-author-list.mappers';
import { usePagination } from './edit-author-list.hook';
import { INITIAL_PAGE, PAGE_SIZE } from './edit-author-list.constanst';
import * as api from './api';

export const EditAuthorListContainer: React.FC = () => {
  const [authorList, setAuthorList] = React.useState<api.Author[]>([]);

  const fetchRowList = (page: number, pageSize: number) => {
    api.getAuthorList(page, pageSize).then(mapAuthorListFromApiToVm).then(setAuthorList);
  };

  const { page, navigateToPage } = usePagination({
    initialPage: INITIAL_PAGE,
    pageSize: PAGE_SIZE,
    fetchRowList,
  });

  const handleChangePage = (page: number) => navigateToPage(page + 1);

  return <EditAuthorList authorList={authorList} page={page} onChangePage={handleChangePage} />;
};
