import { Book } from '@/core/mocks';
import * as viewModel from './edit-book-list.vm';

const mapBookFromApiToVm = (book: Book): viewModel.BookVm => ({
  ...book,
});

export const mapBookListFromApiToVm = (bookList: Book[]): viewModel.BookVm[] =>
  bookList.map(book => mapBookFromApiToVm(book));
