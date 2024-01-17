interface SwitchRoutes {
  root: string;
  login: string;
  loginGoogle: string;
  loginMicrosoft: string;
  dashboard: string;
  bookList: string;
  createBook: string;
  editBookList: string;
  editAuthorList: string;
  createAuthor: string;
  editAuthor: (id: string) => string;
  bookDetail: (id: string) => string;
  editBook: (id: string) => string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  loginGoogle: '/api/ExternalLogin/initiateGoogleSignin',
  loginMicrosoft: '/api/ExternalLogin/initiateMicrosoftSignin',
  dashboard: '/dashboard',
  bookList: '/book-list',
  createBook: '/create-book',
  editBookList: '/edit-book',
  editAuthorList: '/edit-author',
  createAuthor: '/add-author',
  editAuthor: (id: string) => `/edit-author/${id}`,
  bookDetail: (id: string) => `/book/${id}`,
  editBook: (id: string) => `/edit-book/${id}`,
};
