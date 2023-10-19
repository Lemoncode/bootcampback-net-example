import { bookList } from '@/core/mocks';
import { Book } from './book-list.api-model';

export const getBookList = async (): Promise<Book[]> => {
  return [...bookList];
};
