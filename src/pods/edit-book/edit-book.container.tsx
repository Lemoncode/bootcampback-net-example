import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lookup } from '@/common/models';
import { useNotificationContext } from '@/core/notification';
import { EditBook } from './edit-book.component';
import { mapActhorListFromApiToVm, mapBookFromApiToVm, mapBookFromVmToApi } from './edit-book.mappers';
import { BookVm, createEmptyBook } from './edit-book.vm';
import * as api from './api';

interface Props {
  id: string;
}

export const EditBookContainer: React.FC<Props> = props => {
  const { id } = props;
  const navigate = useNavigate();
  const { notify } = useNotificationContext();
  const [authorList, setAuthorList] = React.useState<Lookup[]>([]);
  const [book, setBook] = React.useState<BookVm>(createEmptyBook());

  const handleSubmit = (newBook: BookVm) =>
    api
      .saveBook(mapBookFromVmToApi(newBook))
      .then(() => notify('Libro guardado correctamente', 'success'))
      .then(() => navigate(-1))
      .catch(() => notify('Error al guardar el libro', 'error'));

  const loadData = async () => await api.getActhorList().then(mapActhorListFromApiToVm).then(setAuthorList);

  const loadBook = async () => await api.getBook(id).then(mapBookFromApiToVm).then(setBook);

  React.useEffect(() => {
    loadData();
    if (id) {
      loadBook();
    }
  }, [id]);

  return <EditBook onSubmit={handleSubmit} authorList={authorList} book={book} />;
};
