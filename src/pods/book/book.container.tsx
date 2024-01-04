import React from 'react';
import { useParams } from 'react-router-dom';
import { useNotificationContext } from '@/core/notification';
import { getBookById, getReviewsById } from './api';
import { mapBookFromApiToVm, mapReviewListFromApiToVm } from './book.mappers';
import { BookVm, createEmptyBook, Review } from './book.vm';
import { Book } from './book.component';

export const BookContainer: React.FC = () => {
  const { id } = useParams();
  const { notify } = useNotificationContext();

  const [book, setBook] = React.useState<BookVm>(createEmptyBook);
  const [reviews, setReviews] = React.useState<Review[]>([]);

  const loadData = () =>
    Promise.all([getBookById(id), getReviewsById(id)])
      .then(([book, reviewParams]) => {
        setBook(mapBookFromApiToVm(book));
        setReviews(mapReviewListFromApiToVm(reviewParams.results));
      })
      .catch(() => notify('Error al cargar los datos del libro'));

  React.useEffect(() => {
    loadData();
  }, []);

  return <Book book={book} reviews={reviews} />;
};
