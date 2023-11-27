import { useState } from 'react';

export const usePagination = (initialPage: number = 1) => {
  const [page, setPage] = useState(initialPage);

  const changePage = (newPage: number) => {
    setPage(newPage);
  };

  return { page, changePage };
};
