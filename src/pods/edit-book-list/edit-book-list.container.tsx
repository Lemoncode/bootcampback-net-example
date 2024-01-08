import React from 'react';
import { useNotificationContext } from '@/core/notification';
import { mapBookListFromApiToVm } from './edit-book-mappers';
import { EditBookListComponent } from './edit-book-list.component';
import { BookVm } from './edit-book-list.vm';
import * as api from './api';

export const EditBookList: React.FC = () => {
  const [bookList, setBookList] = React.useState<BookVm[]>([]);
  const { notify } = useNotificationContext();

  const loadData = async () => {
    try {
      const books = await api.getBookList();
      setBookList(mapBookListFromApiToVm(books));
    } catch (error) {
      notify('Error al cargar los libros', 'error');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.deleteBook(id);
      notify('Libro eliminado correctamente', 'success');
      loadData();
    } catch (error) {
      notify('Error al eliminar el libro', 'error');
    }
  };

  React.useEffect(() => {
    loadData();
  }, []);
  return <EditBookListComponent bookList={bookList} onDelete={handleDelete} />;
};
