import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Chip, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { switchRoutes } from '@/core/router';
import { BookVm } from './edit-book.vm';
import * as classes from './edit-book.styles';

interface Props {
  book: BookVm;
  updateBook: (book: BookVm) => void;
}

export const EditBookComponent: React.FC<Props> = props => {
  const { book, updateBook } = props;
  const [bookInfo, setBookInfo] = React.useState(book);
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
    setBookInfo({ ...book, [fieldId]: value });
  };

  const handleSaveBook = () => {
    updateBook(bookInfo);
  };

  React.useEffect(() => {
    setBookInfo(book);
    setAutores(book.authors);
  }, [book]);

  return (
    <div className={classes.root}>
      <header>
        <Typography className={classes.title} variant="h1" component={'h1'}>
          Editar Libro
        </Typography>
      </header>

      <section className={classes.textFieldsContainer}>
        <label htmlFor="title" className={classes.hiddeLabel}>
          Título
        </label>
        <TextField
          id="title"
          onChange={handleFieldChange('title')}
          label="Título"
          variant="outlined"
          value={bookInfo.title}
        />

        <label htmlFor="author" className={classes.hiddeLabel}>
          Autores
        </label>
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

        <label htmlFor="addAuthor" className={classes.hiddeLabel}>
          Añadir autor
        </label>
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
      </section>

      <label htmlFor="image" className={classes.hiddeLabel}>
        Url Imagen
      </label>
      <TextField
        id="image"
        onChange={handleFieldChange('image')}
        label="Url Imagen"
        variant="outlined"
        value={bookInfo.imageUrl}
      />

      <label htmlFor="description" className={classes.hiddeLabel}>
        Descripción
      </label>
      <TextField
        id="description"
        onChange={handleFieldChange('description')}
        label="Descripción"
        variant="outlined"
        minRows={4}
        multiline
        value={bookInfo.description}
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
