import { addBook } from '../../pods/edit-book/api/edit-book.api';
interface SwitchRoutes {
  root: string;
  login: string;
  dashboard: string;
  bookList: string;
  addBook: string;
  editBookList: string;
  editAuthorList: string;
  addAuthor: string;
  bookDetail: (id: string) => string;
  editBook: (id: string) => string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  dashboard: '/dashboard',
  bookList: '/book-list',
  addBook: '/add-book',
  editBookList: '/edit-book',
  editAuthorList: '/edit-author',
  addAuthor: '/add-author',
  bookDetail: (id: string) => `/book/${id}`,
  editBook: (id: string) => `/edit-book/${id}`,
};
