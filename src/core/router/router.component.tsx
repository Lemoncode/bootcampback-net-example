import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { BookListScene, LoginScene } from '@/scenes';
import { routes } from './routes';

export const RouterComponent: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.root} element={<LoginScene />} />
        <Route path={routes.bookList} element={<BookListScene />} />
      </Routes>
    </HashRouter>
  );
};
