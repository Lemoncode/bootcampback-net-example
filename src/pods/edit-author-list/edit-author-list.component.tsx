import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IconButton,
  Pagination,
  PaginationItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { switchRoutes } from '@/core/router';
import { Author } from './edit-author-list.vm';
import { PAGE_SIZE } from './edit-author-list.constants';
import * as classes from './edit-author-list.styles';

interface Props {
  totalRows: number;
  authorList: Author[];
  currentPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export const EditAuthorList: React.FC<Props> = props => {
  const { totalRows, authorList, currentPage, onPageChange } = props;
  const totalPages = Math.ceil(totalRows / PAGE_SIZE);
  const navigate = useNavigate();

  const handleAddBook = () => {
    console.log('add new author');
  };
  const handleEditBook = (id: number) => {
    console.log('edit', id);
  };

  const handleDeleteBook = (id: number) => {
    console.log('delete', id);
  };
  return (
    <div className={classes.root}>
      <header>
        <Typography variant="h1" component={'h1'}>
          Edición de autores
        </Typography>
      </header>
      <IconButton className={classes.add} onClick={handleAddBook} aria-label="Añadir nuevo libro" size="large">
        <Typography variant="caption" component={'span'}>
          Añadir author
        </Typography>
        <AddCircleIcon />
      </IconButton>
      <main>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Título</TableCell>
                <TableCell>Autores</TableCell>
                <TableCell>Número de libros</TableCell>
                <TableCell align="right">Comandos</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {authorList?.map(author => (
                <TableRow key={author.id}>
                  <TableCell>{author.firstName}</TableCell>
                  <TableCell>{author.lastName}</TableCell>
                  <TableCell>{author.bookCount}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => handleEditBook(author.id)}
                      aria-label={`editar ${author.firstName}`}
                      size="large"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDeleteBook(author.id)}
                      aria-label={`borrar ${author.firstName}`}
                      size="large"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
        renderItem={item => (
          <PaginationItem
            {...item}
            aria-label={item.type === 'page' ? `Ir a la página ${item.page}` : `Ir a ${item.type}`}
          />
        )}
        className={classes.pagination}
      />
    </div>
  );
};
