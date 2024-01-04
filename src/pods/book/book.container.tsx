import React from 'react';
import { useParams } from 'react-router-dom';
import { useNotificationContext } from '@/core/notification';
import { mapBookFromApiToVm, mapReviewFromVmToApi, mapReviewListFromApiToVm } from './book.mappers';
import { BookVm, createEmptyBook, Review } from './book.vm';
import { Book } from './book.component';
import * as api from './api';

export const BookContainer: React.FC = () => {
  const { id } = useParams();
  const { notify } = useNotificationContext();

  const [book, setBook] = React.useState<BookVm>(createEmptyBook);
  const [reviews, setReviews] = React.useState<Review[]>([]);

  const loadData = () =>
    Promise.all([api.getBookById(id), api.getReviewsById(id)])
      .then(([book, reviewParams]) => {
        setBook(mapBookFromApiToVm(book));
        setReviews(mapReviewListFromApiToVm(reviewParams.results));
      })
      .catch(() => notify('Error al cargar los datos del libro'));

  const handleSaveReview = (review: Review) => {
    console.log(mapReviewFromVmToApi(review));
    api
      .saveReview(mapReviewFromVmToApi(review))
      .then(() => {
        notify('Reseña guardada con éxito');
        loadData();
      })
      .catch(() => notify('Error al guardar la reseña'));
  };
  const handleDeleteReview = (id: string) =>
    api
      .deleteReview(id)
      .then(() => {
        notify('Reseña eliminada con éxito');
        loadData();
      })
      .catch(() => notify('Error al eliminar la reseña'));

  React.useEffect(() => {
    loadData();
  }, []);

  return <Book book={book} reviews={reviews} onSaveReview={handleSaveReview} onDeleteReview={handleDeleteReview} />;
};
