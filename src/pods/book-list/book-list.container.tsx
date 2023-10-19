import React from 'react';
import { BookList } from './book-list.component';
import { mapBookListFromApiToVm } from './book-list.mapppers';
import * as api from './api';

interface Props {
  className?: string;
}

export const BookListContainer: React.FC<Props> = props => {
  const [bookList, setBookList] = React.useState([]);

  const loadData = async () => {
    const books = await api.getBookList().then(mapBookListFromApiToVm);
    setBookList(books);
  };

  React.useEffect(() => {
    loadData();
  }, []);

  const { className } = props;
  return <BookList className={className} bookList={bookList} />;
};
