import axios from 'axios';
import { Book } from './book.api-model';

export const getBookById = async (id: string): Promise<Book> => {
  const baseUrl = '/api/books';
  const { data } = await axios.get<Book>(`${baseUrl}/${id}`);
  return data;
};
