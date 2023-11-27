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
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

interface Props<T = {}> {
  columns: string[];
  rows: T[];
  totalItems?: number;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  className?: string;
}

const renderTableCells = (item) => {
  return Object.keys(item)
    .filter(key => key !== 'id')
    .map(key => <TableCell key={key}>{item[key]}</TableCell>);
};

export const Table: React.FC<Props> = props => {
  const { rows, columns, onEdit, onDelete, className } = props;

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
              <TableCell align="right">
                <IconButton onClick={() => onEdit(row.id)} aria-label={`editar ${row.id}`} size="large">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(row.id)} aria-label={`borrar ${row.id}`} size="large">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableMaterial>
      <TablePagination
        component="div"
        count={12}
        rowsPerPage={10}
        page={0}
        rowsPerPageOptions={[5]}
        onPageChange={() => {}}
      />
    </TableContainer>
  );
};
