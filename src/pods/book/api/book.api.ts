import { Book } from '@/core/mocks';
import axios from 'axios';

export const getBookById = async (id: string): Promise<Book> => {
  const baseUrl = '/api/books';
  const { data } = await axios.get<Book>(`${baseUrl}/${id}`);
  return data;
};
