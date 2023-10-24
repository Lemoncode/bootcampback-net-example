import { bookList } from '@/core/mocks';
import { Book } from './book.api-model';

export const getBook = async (id: string): Promise<Book> => {
  const book = bookList.find(book => book.id === id);
  return book ? book : Promise.reject('Book not found');
};
