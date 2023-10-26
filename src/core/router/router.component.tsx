import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LoginScene, DashboardScene, BookListScene, BookScene, EditBookListScene } from '@/scenes';
import { switchRoutes } from './routes';

export const RouterComponent: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<BookListScene />} />
        <Route path={switchRoutes.bookList} element={<BookListScene />} />
        <Route path={switchRoutes.bookDetail(':id')} element={<BookScene />} />
        <Route path={switchRoutes.login} element={<LoginScene />} />
        <Route path={switchRoutes.dashboard} element={<DashboardScene />} />
        <Route path={switchRoutes.editBookList} element={<EditBookListScene />} />
        <Route path="*" element={<BookListScene />}></Route>
      </Routes>
    </HashRouter>
  );
};
