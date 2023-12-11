import axios from 'axios';
import { bookList, Book } from '@/core/mocks';
import { BookVm } from '../edit-book.vm';

export const getBookInfo = async (id: string): Promise<Book> => {
  const baseUrl = '/api/books';
  const { data } = await axios.get<Book>(`${baseUrl}/${id}`);
  return data;
};

// export const updateBook = async (book: BookVm): Promise<boolean> => {
//   const bookIndex = bookList.findIndex(item => item.id === book.id);
//   if (bookIndex !== -1) {
//     bookList[bookIndex] = {
//       ...bookList[bookIndex],
//       title: book.title,
//       authors: book.authors,
//       description: book.description,
//     };
//     return true;
//   } else {
//     return Promise.reject('Book not found');
//   }
// };
