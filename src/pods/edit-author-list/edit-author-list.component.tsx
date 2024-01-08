import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Typography } from '@mui/material';
import { AddCircle as AddCircleIcon } from '@mui/icons-material';
import { switchRoutes } from '@/core/router';
import { TableComponent } from './components';
import { Author } from './edit-author-list.vm';
import * as classes from './edit-author-list.styles';

interface Props {
  totalRows: number;
  authorList: Author[];
  initialPage: number;
  loadData: (newPage: number) => void;
  onDelete: (id: string) => void;
}

export const EditAuthorList: React.FC<Props> = ({ totalRows, authorList, initialPage, loadData, onDelete }) => {
  const navigate = useNavigate();

  const handleAddAuthor = () => navigate(switchRoutes.createAuthor);

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
      <TableComponent
        authorList={authorList}
        initialPage={initialPage}
        totalRows={totalRows}
        loadData={loadData}
        onDelete={onDelete}
      />
    </div>
  );
};
