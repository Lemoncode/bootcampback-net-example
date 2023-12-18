import React from 'react';
import { Lookup } from '@/common/models';
import { EditBook } from './edit-book.component';
import { saveBook, getActhorList, getBook } from './api';
import { mapActhorListFromApiToVm, mapBookFromApiToVm, mapBookFromVmToApi } from './edit-book.mappers';
import { BookVm, createEmptyBook } from './edit-book.vm';
import { useParams } from 'react-router-dom';

interface Props {
  isEditMode?: boolean;
}

export const EditBookContainer: React.FC<Props> = props => {
  const { isEditMode } = props;
  const { id } = useParams();
  const [authorList, setAuthorList] = React.useState<Lookup[]>([]);
  const [book, setBook] = React.useState<BookVm>(createEmptyBook());

  const handleSubmit = (newBook: BookVm) => saveBook(mapBookFromVmToApi(newBook));

  const loadData = async () => await getActhorList().then(mapActhorListFromApiToVm).then(setAuthorList);

  const loadBook = async () => {
    await getBook(id).then(mapBookFromApiToVm).then(setBook);
  };

  React.useEffect(() => {
    loadData();
    if (isEditMode) {
      loadBook();
    }
  }, []);

  return (
    <EditBook onSubmit={handleSubmit} authorList={authorList} isEditMode={isEditMode} book={book} setBook={setBook} />
  );
};
