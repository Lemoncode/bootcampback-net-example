import React from 'react';
import { Lookup } from '@/common/models';
import { AddBookComponent } from './add-book.component';
import { addBook, getActhorList } from './api';
import { mapActhorListFromApiToVm, mapBookFromVmToApi } from './add.book.mappers';
import { BookVm } from './add-book.vm';

export const AddBook: React.FC = () => {
  const [authorList, setAuthorList] = React.useState<Lookup[]>([]);
  const handleAddBook = (newBook: BookVm) => {
    addBook(mapBookFromVmToApi(newBook));
  };

  const loadData = async () => await getActhorList().then(mapActhorListFromApiToVm).then(setAuthorList);

  React.useEffect(() => {
    loadData();
  }, []);

  return <AddBookComponent addBook={handleAddBook} authorList={authorList} />;
};
