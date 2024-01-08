import { Book } from './edit-book-list.api-model';
import axios from 'axios';

export const getBookList = async (): Promise<Book[]> => {
  const baseUrl = '/api/books/novelties';
  const { data } = await axios.get<Book[]>(`${baseUrl}?limit=6`);
  return data;
};

export const deleteBook = async (id: string): Promise<boolean> => {
  const { data } = await axios.delete(`/api/books/${id}`);
  return data;
};
