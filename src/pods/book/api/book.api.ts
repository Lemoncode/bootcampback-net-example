import { bookList, Book } from '@/core/mocks';

export const getBook = async (id: string): Promise<Book> => {
  const book = bookList.find(book => book.id === id);
  return book ? book : Promise.reject('Book not found');
};
