import React from 'react';
import {
  TableContainer,
  Table as TableMaterial,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
  TablePagination,
} from '@mui/material';
import { ActionButtons } from './components';

type Row = { [key: string]: any };

interface Props {
  columns: string[];
  rows: Row[];
  rowsTotalCount?: number;
  page?: number;
  pageSize?: number;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onChangePage: (page: number) => void;
  className?: string;
}

const renderTableCells = (row: Row) => {
  return Object.keys(row)
    .filter(key => key !== 'id')
    .map(key => <TableCell key={key}>{row[key]}</TableCell>);
};

export const Table: React.FC<Props> = props => {
  const { rows, page, pageSize, rowsTotalCount, columns, onEdit, onDelete, onChangePage, className } = props;

  return (
    <TableContainer component={Paper} className={className}>
      <TableMaterial sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map(field => (
              <TableCell key={field}>{field}</TableCell>
            ))}
            <TableCell align="right">Comandos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map(row => (
            <TableRow key={row.id}>
              {renderTableCells(row)}
              <ActionButtons row={row} onEdit={onEdit} onDelete={onDelete} />
            </TableRow>
          ))}
        </TableBody>
      </TableMaterial>
      <TablePagination
        component="div"
        count={rowsTotalCount}
        rowsPerPage={pageSize}
        page={page - 1}
        rowsPerPageOptions={[pageSize]}
        onPageChange={(event, newPage) => onChangePage(newPage)}
      />
    </TableContainer>
  );
};
