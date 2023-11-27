import React from 'react';
import { Author } from './edit-author-list.vm';
import { Table } from '@/common-app/components';
import * as classes from './edit-author-list.styles';
import { Typography } from '@mui/material';

interface Props {
  authorList: Author[];
  page: number;
  onChangePage: (page: number) => void;
}

export const EditAuthorList: React.FC<Props> = props => {
  const { authorList, page, onChangePage} = props;

  const handleEditAuthor = (id: string) => {
    console.log('Edit author', id);
  };

  const handleDeleteAuthor = (id: string) => {
    console.log('Delete author', id);
  };

  return (
    <div className={classes.root}>
      <header>
        <Typography variant="h1" component={'h1'}>
          Edición de Autores
        </Typography>
      </header>
      <Table
        rows={authorList}
        columns={['Nombre', 'Apellidos', 'Número de Libros']}
        rowsTotalCount={12}
        onEdit={handleEditAuthor}
        onDelete={handleDeleteAuthor}
        pageSize={10}
        page={page}
        onChangePage={onChangePage}
      />
    </div>
  );
};
