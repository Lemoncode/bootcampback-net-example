import { Book } from '@/core/mocks';
import axios from 'axios';

export const getBookList = async (): Promise<Book[]> => {
  const baseUrl = '/api/books/novelties';
  const { data } = await axios.get<Book[]>(`${baseUrl}?limit=6`);
  return data;
};
