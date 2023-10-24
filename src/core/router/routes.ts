interface SwitchRoutes {
  root: string;
  bookList: string;
  login: string;
  dashboard: string;
  edicionLibros: string;
  edicionAutores: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  bookList: '/book-list',
  login: '/login',
  dashboard: '/dashboard',
  edicionLibros: '/edicion-libros',
  edicionAutores: '/edicion-autores',
};
