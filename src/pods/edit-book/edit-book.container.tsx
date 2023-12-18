import React from 'react';
import { useParams } from 'react-router-dom';
import { Lookup } from '@/common/models';
import { useNotificationContext } from '@/core/notification';
import { EditBook } from './edit-book.component';
import { mapActhorListFromApiToVm, mapBookFromApiToVm, mapBookFromVmToApi } from './edit-book.mappers';
import { BookVm, createEmptyBook } from './edit-book.vm';
import * as api from './api';

interface Props {
  isEditMode?: boolean;
}

export const EditBookContainer: React.FC<Props> = props => {
  const { isEditMode } = props;
  const { id } = useParams();
  const { notify } = useNotificationContext();
  const [authorList, setAuthorList] = React.useState<Lookup[]>([]);
  const [book, setBook] = React.useState<BookVm>(createEmptyBook());

  const handleSubmit = (newBook: BookVm) => {
    try {
      api.saveBook(mapBookFromVmToApi(newBook));
      notify('Libro guardado correctamente', 'success');
    } catch (error) {
      notify('Error al guardar el libro', 'error');
    }
  };

  const loadData = async () => await api.getActhorList().then(mapActhorListFromApiToVm).then(setAuthorList);

  const loadBook = async () => await api.getBook(id).then(mapBookFromApiToVm).then(setBook);

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
