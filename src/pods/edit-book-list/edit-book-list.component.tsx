import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Input,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { switchRoutes } from '@/core/router';
import { BookVm } from './edit-book-list.vm';
import * as classes from './edit-book.list.styles';

interface Props {
  bookList: BookVm[];
}

export const EditBookListComponent: React.FC<Props> = props => {
  const { bookList } = props;
  const [filteredBookList, setFilteredBookList] = React.useState(bookList);
  const navigate = useNavigate();

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === '') {
      setFilteredBookList(bookList);
      return;
    }
    const filteredList = filteredBookList.filter(book => book.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredBookList(filteredList);
  };

  const handleEdit = (id: string) => {
    navigate(switchRoutes.bookDetail(id));
  };

  React.useEffect(() => {
    setFilteredBookList(bookList);
  }, [bookList]);

  return (
    <div className={classes.root}>
      <Typography variant="h1" component={'h1'}>
        Edición de libros
      </Typography>
      <Input onChange={handleFilter} placeholder="Filtrar por título: E.j. El Hobbit" />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell>Autores</TableCell>
              <TableCell align="right">Comandos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBookList?.map(book => (
              <TableRow key={book.id} tabIndex={0}>
                <TableCell tabIndex={1}>{book.title}</TableCell>
                <TableCell tabIndex={1}>{book.authors.join(', ')}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleEdit(book.id)} aria-label="editar" size="large">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="borrar" size="large">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
