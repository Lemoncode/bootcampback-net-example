import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Chip, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { switchRoutes } from '@/core/router';
import { BookVm, createEmptyBook } from './add-book.vm';
import * as classes from './add-book.styles';

interface Props {
  addBook: (book: BookVm) => void;
}

export const AddBookComponent: React.FC<Props> = props => {
  const { addBook } = props;
  const [bookInfo, setBookInfo] = React.useState(createEmptyBook());
  const [autores, setAutores] = React.useState(bookInfo.authors);
  const [newAuthor, setNewAuthor] = React.useState('');

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(switchRoutes.editBookList);
  };

  const handleAddAuthor = () => {
    setAutores([...autores, newAuthor]);
    setNewAuthor('');
  };

  const handleDeleteAuthor = index => {
    const nuevosAutores = autores.filter((_, i) => i !== index);
    setAutores(nuevosAutores);
  };

  const handleFieldChange = (fieldId: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBookInfo({ ...bookInfo, [fieldId]: value });
  };

  const handleSaveBook = () => {
    addBook(bookInfo);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h1" component={'h1'}>
        Editar Libro
      </Typography>
      <div className={classes.textFieldsContainer}>
        <TextField id="title" onChange={handleFieldChange('title')} label="Título" variant="outlined" />
        <TextField
          id="author"
          onChange={handleFieldChange('authors')}
          label="Autores"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <div className={classes.chipsContainer}>
                {autores.map((autor, index) => (
                  <Chip key={index} label={autor} onDelete={() => handleDeleteAuthor(index)} />
                ))}
              </div>
            ),
            readOnly: true,
          }}
        />
        <TextField
          id="addAuthor"
          label="Añadir autor"
          variant="outlined"
          fullWidth
          onChange={e => setNewAuthor(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleAddAuthor();
            }
          }}
        />
      </div>
      <TextField id="image" onChange={handleFieldChange('image')} label="Url Imagen" variant="outlined" />
      <TextField
        id="description"
        onChange={handleFieldChange('description')}
        label="Descripción"
        variant="outlined"
        minRows={4}
        multiline
      />
      <Button onClick={handleSaveBook} variant="contained">
        Guardar
      </Button>

      <IconButton
        className={classes.goBack}
        onClick={handleGoBack}
        aria-label="Volver al listado de edición de libros"
        size="large"
      >
        <ArrowBackIcon />
        <Typography variant="caption" component={'span'}>
          Regresar
        </Typography>
      </IconButton>
    </div>
  );
};
