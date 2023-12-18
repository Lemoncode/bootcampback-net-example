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
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ConfirmationDialog, useConfirmationDialog } from '@/common/components';
import { useNotificationContext } from '@/core/notification';
import { switchRoutes } from '@/core/router';
import { BookVm } from './edit-book-list.vm';
import * as classes from './edit-book.list.styles';

interface Props {
  bookList: BookVm[];
  onDelete: (id: string) => void;
}

export const EditBookListComponent: React.FC<Props> = props => {
  const { bookList, onDelete } = props;
  const [currentBookList, setCurrentBookList] = React.useState<BookVm[]>(bookList); // [1
  const [filteredBookList, setFilteredBookList] = React.useState(bookList);
  const navigate = useNavigate();
  const { notify } = useNotificationContext();
  const { isOpen, itemToDelete, onOpenDialog, onAccept, onClose } = useConfirmationDialog();

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === '') {
      setFilteredBookList(currentBookList);
      return;
    }
    const filteredList = currentBookList.filter(book => book.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredBookList(filteredList);
  };

  const handleAddBook = () => {
    navigate(switchRoutes.createBook);
  };

  const handleEditBook = (id: string) => {
    navigate(switchRoutes.editBook(id));
  };

  const handleDeleteBook = (id: string) => {
    onDelete(id);
    onAccept();
  };

  React.useEffect(() => {
    setFilteredBookList(currentBookList);
  }, [currentBookList]);

  React.useEffect(() => {
    setCurrentBookList(bookList);
  }, [bookList]);

  return (
    <div className={classes.root}>
      <header>
        <Typography variant="h1" component={'h1'}>
          Edición de libros
        </Typography>
      </header>

      <label htmlFor="filterInput" className={classes.hiddeLabel}>
        Filtrar por título de libro
      </label>
      <Input id="filterInput" onChange={handleFilter} placeholder="Filtrar por título..." />

      <IconButton className={classes.add} onClick={handleAddBook} aria-label="Añadir nuevo libro" size="large">
        <Typography variant="caption" component={'span'}>
          Añadir libro
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
                <TableCell align="right">Comandos</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredBookList?.map(book => (
                <TableRow key={book.id}>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.authors.join(', ')}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => handleEditBook(book.id)}
                      aria-label={`editar ${book.title}`}
                      size="large"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => onOpenDialog({ id: book.id, name: book.title })}
                      aria-label={`borrar ${book.title}`}
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
      {isOpen && (
        <ConfirmationDialog
          isOpen={isOpen}
          labels={{ acceptButton: 'Aceptar', closeButton: 'Cerrar' }}
          onAccept={() => handleDeleteBook(itemToDelete.id)}
          onClose={onClose}
          title="Eliminar"
        >
          <Typography variant="body1">
            ¿Seguro que quiere borrar <strong>{itemToDelete.name}</strong>?
          </Typography>
        </ConfirmationDialog>
      )}
    </div>
  );
};
