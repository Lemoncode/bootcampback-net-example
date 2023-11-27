import React from 'react';
import { Author } from './edit-author-list.vm';
import { Table } from '@/common-app/components';
import * as classes from './edit-author-list.styles';
import { Typography } from '@mui/material';

interface Props {
  authorList: Author[];
}

export const EditAuthorList: React.FC<Props> = props => {
  const { authorList } = props;

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
        onEdit={handleEditAuthor}
        onDelete={handleDeleteAuthor}
      />
    </div>
  );
};
