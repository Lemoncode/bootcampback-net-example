import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LoginScene, DasboardScene, BookListScene } from '@/scenes';
import { switchRoutes } from './routes';

export const RouterComponent: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />} />
        <Route path={switchRoutes.dashboard} element={<DasboardScene />} />
        <Route path={switchRoutes.bookList} element={<BookListScene />} />
        <Route path="*" element={<LoginScene />}></Route>
      </Routes>
    </HashRouter>
  );
};
