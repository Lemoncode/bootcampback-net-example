import * as apiModel from './api';
import * as vm from './book-list.vm';

export const mapBookListFromApiToVm = (bookList: apiModel.Book[]): vm.Book[] =>
  bookList.map(book => mapBookFromApiToVm(book));

const mapBookFromApiToVm = (book: apiModel.Book): vm.Book => ({
  id: book.id,
  title: book.title,
  image: book.image,
});
