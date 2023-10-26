import * as apiModel from './api';
import * as viewModel from './edit-book-list.vm';

const mapBookFromApiToVm = (book: apiModel.Book): viewModel.BookVm => ({
  ...book,
});

export const mapBookListFromApiToVm = (bookList: apiModel.Book[]): viewModel.BookVm[] =>
  bookList.map(book => mapBookFromApiToVm(book));
