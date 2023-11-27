interface SwitchRoutes {
  root: string;
  login: string;
  bookList: string;
  dashboard: string;
  editBookList: string;
  editAuthorList: string;
  addBook: string;
  editBook: (id: string) => string;
  bookDetail: (id: string) => string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  bookList: '/book-list',
  dashboard: '/dashboard',
  editBookList: '/bock-list-edition',
  editAuthorList: '/author-list-edition',
  addBook: '/add-book',
  editBook: (id: string) => `/book-edition/${id}`,
  bookDetail: (id: string) => `/book-detail/${id}`,
};
