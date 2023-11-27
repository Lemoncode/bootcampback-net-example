import React from 'react';
import { IconButton, TableCell } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

interface Props {
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  row: { [key: string]: any };
}

export const ActionButtons: React.FC<Props> = props => {
  const { row, onEdit, onDelete } = props;
  return (
    <TableCell align="right">
      <IconButton onClick={() => onEdit(row.id)} aria-label={`editar ${row.title}`} size="large">
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => onDelete(row.id)} aria-label={`borrar ${row.title}`} size="large">
        <DeleteIcon />
      </IconButton>
    </TableCell>
  );
};
