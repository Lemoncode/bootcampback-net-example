import { Book } from './api';
import { BookVm } from './edit-book-list.vm';

const mapBookFromApiToVm = (book: Book): BookVm => ({
  id: book.id.toString(),
  title: book.title,
  authors: book.authors.map(author => `${author.firstName} ${author.lastName}`),
});

export const mapBookListFromApiToVm = (bookList: Book[]): BookVm[] =>
  Boolean(bookList) ? bookList.map(book => mapBookFromApiToVm(book)) : [];
