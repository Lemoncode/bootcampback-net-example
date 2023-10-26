import React from 'react';
import { getBookList } from './api';
import { mapBookListFromApiToVm } from './edit-book-mappers';
import { EditBookListComponent } from './edit-book-list.component';

export const EditBookList: React.FC = () => {
  const [bookList, setBookList] = React.useState([]);

  React.useEffect(() => {
    getBookList().then(bookList => {
      setBookList(mapBookListFromApiToVm(bookList));
    });
  }, []);
  return <EditBookListComponent bookList={bookList} />;
};
