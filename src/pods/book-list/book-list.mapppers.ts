import { Book } from '@/core/mocks';
import * as vm from './book-list.vm';

export const mapBookListFromApiToVm = (bookList: Book[]): vm.Book[] => bookList.map(book => mapBookFromApiToVm(book));

const mapBookFromApiToVm = (book: Book): vm.Book => ({
  id: book.id,
  title: book.title,
  image: book.image,
});
