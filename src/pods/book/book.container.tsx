import React from 'react';
import { useParams } from 'react-router-dom';
import { useNotificationContext } from '@/core/notification';
import { getBookById, getReviewsById } from './api';
import { mapBookFromApiToVm } from './book.mappers';
import { createEmptyBook } from './book.vm';
import { BookComponent } from './book.component';

export const Book: React.FC = () => {
  const [book, setBook] = React.useState(createEmptyBook);
  const { id } = useParams();
  const { notify } = useNotificationContext();

  const loadData = () =>
    Promise.all([getBookById(id), getReviewsById(id)])
      .then(([book, reviews]) => {
        setBook(mapBookFromApiToVm(book, reviews));
      })
      .catch(() => notify('Error al cargar los datos del libro'));

  React.useEffect(() => {
    loadData();
  }, [book]);

  return <BookComponent book={book} />;
};
