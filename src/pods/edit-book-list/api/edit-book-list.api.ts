import { bookList, Book } from '@/core/mocks';

export const getBookList = async (): Promise<Book[]> => {
  return [...bookList];
};
