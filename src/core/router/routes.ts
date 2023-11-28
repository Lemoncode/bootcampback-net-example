interface SwitchRoutes {
  root: string;
  login: string;
  dashboard: string;
  bookList: string;
  addBook: string;
  editBookList: string;
  editAuthorList: string;
  bookDetail: (id: string) => string;
  editBook: (id: string) => string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  dashboard: '/dashboard',
  bookList: '/book-list',
  addBook: '/add-book',
  editBookList: '/bock-list-edition',
  editAuthorList: '/author-list-edition',
  bookDetail: (id: string) => `/book-detail/${id}`,
  editBook: (id: string) => `/book-edition/${id}`,
};
