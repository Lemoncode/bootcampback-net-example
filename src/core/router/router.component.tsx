import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {
  LoginScene,
  DashboardScene,
  BookListScene,
  BookScene,
  EditBookListScene,
  EditBookScene,
  EditAuthorListScene,
  EditAuthorScene,
} from '@/scenes';
import { switchRoutes } from './routes';
import { useAuth } from '../auth';

export const RouterComponent: React.FC = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.bookDetail(':id')} element={<BookScene />} />
        <Route path={switchRoutes.login} element={<LoginScene />} />
        {user ? (
          <>
            <Route path={switchRoutes.root} element={<BookListScene />} />
            <Route path={switchRoutes.dashboard} element={<DashboardScene />} />
            <Route path={switchRoutes.bookList} element={<BookListScene />} />
            <Route path={switchRoutes.createBook} element={<EditBookScene />} />
            <Route path={switchRoutes.editBookList} element={<EditBookListScene />} />
            <Route path={switchRoutes.editAuthorList} element={<EditAuthorListScene />} />
            <Route path={switchRoutes.editBook(':id')} element={<EditBookScene />} />
            <Route path={switchRoutes.createAuthor} element={<EditAuthorScene />} />
            <Route path={switchRoutes.editAuthor(':id')} element={<EditAuthorScene />} />
          </>
        ) : (
          <Route path="*" element={<BookListScene />}></Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};
