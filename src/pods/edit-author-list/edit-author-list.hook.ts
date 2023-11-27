import React from 'react';

interface PaginationProps {
  initialPage: number;
  pageSize: number;
  fetchRowList: (page: number, pageSize: number) => void;
}

export const usePagination = (paginationProps: PaginationProps) => {
  const { initialPage, pageSize, fetchRowList } = paginationProps;
  const [page, setPage] = React.useState(initialPage);

  const navigateToPage = (newPage: number) => {
    setPage(newPage);
    fetchRowList(page, pageSize);
  };

  React.useEffect(() => {
    navigateToPage(page);
  }, [page, pageSize]);

  return { page, navigateToPage };
};
