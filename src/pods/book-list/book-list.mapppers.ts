import { Book } from '@/core/mocks';
import * as vm from './book-list.vm';

export const mapBookListFromApiToVm = (bookList: Book[]): vm.Book[] => bookList.map(book => mapBookFromApiToVm(book));

const mapBookFromApiToVm = (book: Book): vm.Book => ({
  id: book.id.toString(),
  title: book.title,
  imageUrl: book.imageUrl,
  imageAltText: book.imageAltText,
});
