interface SwitchRoutes {
  root: string;
  bookList: string;
  bookDetail: (id: string) => string;
  login: string;
  dashboard: string;
  editBookList: string;
  editBook: (id: string) => string;
  addBook: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  bookList: '/book-list',
  bookDetail: (id: string) => `/book-detail/${id}`,
  login: '/login',
  dashboard: '/dashboard',
  editBookList: '/bock-list-edition',
  editBook: (id: string) => `/book-edition/${id}`,
  addBook: '/add-book',
};
