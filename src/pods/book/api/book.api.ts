import axios from 'axios';
import { Book, ReviewParams, Review } from './book.api-model';

export const getBookById = async (id: string): Promise<Book> => {
  const baseUrl = '/api/books';
  const { data } = await axios.get<Book>(`${baseUrl}/${id}`);
  return data;
};

export const getReviewsById = async (id: string): Promise<ReviewParams> => {
  const baseUrl = '/api/books';
  const { data } = await axios.get<ReviewParams>(`${baseUrl}/${id}/reviews?page=1&limit=5`);
  return data;
};

export const saveReview = async (review: Review, id: string): Promise<boolean> => {
  review.id
    ? await axios.put<boolean>(`/api/books/${id}/reviews`, review)
    : await axios.post<boolean>(`/api/books/${id}/reviews`, review);

  return true;
};

export const deleteReview = async (id: string): Promise<boolean> => {
  const baseUrl = '/api/reviews';
  await axios.delete<boolean>(`${baseUrl}/${id}`);
  return true;
};
