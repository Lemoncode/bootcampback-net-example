import React from 'react';
import { BookList } from './book-list.component';
import { mapBookListFromApiToVm } from './book-list.mapppers';
import * as api from './api';

export const BookListContainer: React.FC = () => {
  const [bookList, setBookList] = React.useState([]);

  const loadData = async () => {
    const books = await api.getBookList().then(mapBookListFromApiToVm);
    setBookList(books);
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return <BookList bookList={bookList} />;
};
