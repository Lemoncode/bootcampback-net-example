import React from 'react';
import { useParams } from 'react-router-dom';
import { useNotificationContext } from '@/core/notification';
import { getBookById } from './api';
import { mapBookFromApiToVm } from './book.mappers';
import { createEmptyBook } from './book.vm';
import { BookComponent } from './book.component';

export const Book: React.FC = () => {
  const [book, setBook] = React.useState(createEmptyBook());
  const { id } = useParams();
  const { notify } = useNotificationContext();

  const loadBook = async () => {
    try {
      const book = await getBookById(id);
      setBook(mapBookFromApiToVm(book));
    } catch (error) {
      notify('Error al cargar el libro', 'error');
    }
  };

  React.useEffect(() => {
    loadBook();
  }, []);

  return <BookComponent book={book} />;
};
