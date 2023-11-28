import React from 'react';
import { cx } from '@emotion/css';
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination,
  PaginationItem,
} from '@mui/material';
import { usePagination } from '@/common/hooks';
import * as classes from './table.styles';

export interface Column {
  id: string;
  label: string;
  cellRenderer?: (row: any) => React.ReactNode;
}

interface Props {
  rows: any[];
  columns: Column[];
  totalRows: number;
  initialPage: number;
  loadData: (newPage: number) => void;
  pageSize: number;
  className?: string;
}

export const Table: React.FC<Props> = ({ rows, columns, totalRows, initialPage, loadData, pageSize, className }) => {
  const { currentPage, handlePageChange } = usePagination(initialPage, loadData);
  const totalPages = Math.ceil(totalRows / pageSize);

  return (
    <TableContainer className={cx(className, classes.root)}>
      <MuiTable>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {columns.map(column => (
                <TableCell key={column.id}>{column.cellRenderer ? column.cellRenderer(row) : row[column.id]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
      {pageSize < totalRows && (
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          renderItem={item => (
            <PaginationItem
              {...item}
              aria-label={item.type === 'page' ? `Go to page ${item.page}` : `Go to ${item.type}`}
            />
          )}
          className={classes.pagination}
        />
      )}
    </TableContainer>
  );
};
