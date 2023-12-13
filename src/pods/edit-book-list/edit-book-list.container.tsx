import React from 'react';
import { getBookList } from './api';
import { mapBookListFromApiToVm } from './edit-book-mappers';
import { EditBookListComponent } from './edit-book-list.component';
import { BookVm } from './edit-book-list.vm';

export const EditBookList: React.FC = () => {
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
  return <EditBookListComponent bookList={bookList} />;
};
