import React from 'react';

export const usePagination = (initialPage: number, loadData: (page: number) => void) => {
  const [currentPage, setCurrentPage] = React.useState<number>(initialPage);

  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
  };

  React.useEffect(() => {
    loadData(currentPage);
  }, [loadData, currentPage]);

  return { currentPage, handlePageChange };
};
