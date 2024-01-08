import React from 'react';
import { usePagination } from '@/common/hooks';
import { TableContainer, Table, Paper, Pagination, PaginationItem } from '@mui/material';
import { Author } from '../edit-author-list.vm';
import { PAGE_SIZE } from '../edit-author-list.constants';
import * as classes from './table.styles';
import { TableHeader } from './table-header.component';
import { TableBody } from './table-body.component';

interface Props {
  authorList: Author[];
  initialPage: number;
  totalRows: number;
  loadData: (newPage: number) => void;
  onDelete: (id: string) => void;
}

export const TableComponent: React.FC<Props> = props => {
  const { authorList, initialPage, totalRows, loadData, onDelete } = props;

  const { currentPage, handlePageChange } = usePagination(initialPage, loadData);
  const totalPages = Math.ceil(totalRows / PAGE_SIZE);
  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table>
        <TableHeader />
        <TableBody authorList={authorList} onDelete={onDelete} />
      </Table>
      {PAGE_SIZE < totalRows && (
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          renderItem={item => (
            <PaginationItem
              {...item}
              aria-label={item.type === 'page' ? `Ira a la página ${item.page}` : `Ir a ${item.type}`}
            />
          )}
          className={classes.pagination}
        />
      )}
    </TableContainer>
  );
};
