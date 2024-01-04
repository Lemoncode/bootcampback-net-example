import React from 'react';
import { useNotificationContext } from '@/core/notification';
import { mapBookFromApiToVm, mapReviewFromVmToApi, mapReviewListFromApiToVm } from './book.mappers';
import { BookVm, createEmptyBook, Review } from './book.vm';
import { Book } from './book.component';
import * as api from './api';

interface Props {
  id: string;
}

export const BookContainer: React.FC<Props> = (props) => {
  const { id } = props;
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

  const handleSaveReview = (review: Review) =>
    api
      .saveReview(mapReviewFromVmToApi(review))
      .then(() => {
        notify('Reseña guardada con éxito');
        loadData();
      })
      .catch(() => notify('Error al guardar la reseña'));

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
