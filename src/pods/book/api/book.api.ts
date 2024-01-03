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

export const saveReview = async (review: Review): Promise<boolean> => {
  const baseUrl = '/api/reviews';

  review.id ? await axios.put<boolean>(`${baseUrl}`, review) : await axios.post<boolean>(`${baseUrl}`, review);

  return true;
};
