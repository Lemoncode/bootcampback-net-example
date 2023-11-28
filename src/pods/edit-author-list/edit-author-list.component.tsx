import React from 'react';
import { IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Table, Column } from '@/common/components';
import { Author } from './edit-author-list.vm';
import { PAGE_SIZE } from './edit-author-list.constants';
import * as classes from './edit-author-list.styles';

interface Props {
  totalRows: number;
  authorList: Author[];
  initialPage: number;
  loadData: (newPage: number) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const EditAuthorList: React.FC<Props> = ({ totalRows, authorList, initialPage, loadData, onEdit, onDelete }) => {
  const columns: Column[] = [
    { id: 'firstName', label: 'Título' },
    { id: 'lastName', label: 'Autores' },
    { id: 'bookCount', label: 'Número de libros' },
    {
      id: 'actions',
      label: 'Comandos',
      cellRenderer: author => (
        <>
          <IconButton onClick={() => onEdit(author.id)} aria-label={`editar ${author.firstName}`} size="large">
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => onDelete(author.id)} aria-label={`borrar ${author.firstName}`} size="large">
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <div className={classes.root}>
      <Table
        rows={authorList}
        columns={columns}
        totalRows={totalRows}
        initialPage={initialPage}
        loadData={loadData}
        pageSize={PAGE_SIZE}
      />
    </div>
  );
};
