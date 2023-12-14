import * as apiModel from '@/core/mocks';
import * as vm from './book-list.vm';

export const mapBookListFromApiToVm = (bookList: apiModel.Book[]): vm.BookVm[] =>
  bookList.map(book => mapBookFromApiToVm(book));

const mapBookFromApiToVm = (book: apiModel.Book): vm.BookVm => ({
  id: book.id.toString(),
  title: book.title,
  imageUrl: book.imageUrl,
  imageAltText: book.imageAltText,
});
