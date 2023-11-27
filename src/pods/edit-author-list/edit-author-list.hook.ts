import React from 'react';

type FetchItemsFunction = (page: number, pageSize: number) => void;

export const usePagination = (pageSize: number, fetchItems: FetchItemsFunction) => {
  const [page, setPage] = React.useState(1);

  const handlePageChange = (newPage: number) => {
    setPage(newPage + 1);
    fetchItems(newPage + 1, pageSize);
  };

  return { page, onPageChange: handlePageChange };
};
