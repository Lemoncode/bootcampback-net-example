import React from 'react';
import { BookList } from './book-list.component';
import { mapBookListFromApiToVm } from './book-list.mapppers';
import { getBookList } from './api';
import { BookVm } from './book-list.vm';

export const BookListContainer: React.FC = () => {
  const [bookList, setBookList] = React.useState<BookVm[]>([]);

  const loadData = async () => {
    try {
      const books = await getBookList();
      setBookList(mapBookListFromApiToVm(books));
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return <BookList bookList={bookList} />;
};
