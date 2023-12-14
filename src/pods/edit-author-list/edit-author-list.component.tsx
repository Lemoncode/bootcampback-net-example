import React from 'react';
import { useNavigate } from 'react-router-dom';
import { switchRoutes } from '@/core/router';
import { IconButton, Typography } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, AddCircle as AddCircleIcon } from '@mui/icons-material';
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
  const navigate = useNavigate();
  const columns: Column[] = [
    { id: 'firstName', label: 'Nombre' },
    { id: 'lastName', label: 'Apellidos' },
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

  const handleAddAuthor = () => {
    navigate(switchRoutes.addAuthor);
  };

  return (
    <div className={classes.root}>
      <header>
        <Typography variant="h1" component={'h1'}>
          Edición de Autores
        </Typography>
      </header>

      <IconButton className={classes.add} onClick={handleAddAuthor} aria-label="Añadir nuevo autor" size="large">
        <Typography variant="caption" component={'span'}>
          Añadir autor
        </Typography>
        <AddCircleIcon />
      </IconButton>
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
