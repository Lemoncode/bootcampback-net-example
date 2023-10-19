import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { BookListScene } from '@/scenes';
import { routes } from './routes';

export const RouterComponent: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.root} element={<BookListScene />} />
      </Routes>
    </HashRouter>
  );
};
