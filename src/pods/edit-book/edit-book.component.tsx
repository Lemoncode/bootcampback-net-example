import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, IconButton, Autocomplete } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Lookup } from '@/common/models';
import { switchRoutes } from '@/core/router';
import { BookVm, createEmptyBook } from './edit-book.vm';
import { saveImage } from './api';
import * as classes from './edit-book.styles';

interface Props {
  authorList: Lookup[];
  isEditMode?: boolean;
  book: BookVm;
  setBook: (book: BookVm) => void;
  onSubmit: (book: BookVm) => void;
}

export const EditBook: React.FC<Props> = props => {
  const { onSubmit, authorList, isEditMode, book, setBook } = props;
  const navigate = useNavigate();
  const fileInput = React.useRef(null);

  const handleGoBack = () => navigate(switchRoutes.editBookList);
  const handleFieldChange = (fieldId: string) => (e: React.ChangeEvent<HTMLInputElement>, value?: Lookup[]) => {
    if (Boolean(!value)) return setBook({ ...book, [fieldId]: e.target.value });
    setBook({ ...book, [fieldId]: value });
  };
  const handleSaveBook = () => onSubmit(book);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files[0];
      saveImage(file).then(imageUrl => {
        setBook({ ...book, imageUrl: imageUrl.id });
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  const availableAuthors = authorList.filter(
    author => !book.authors.some(selectedAuthor => selectedAuthor.id === author.id)
  );
  return (
    <div className={classes.root}>
      <header>
        <Typography className={classes.title} variant="h1" component={'h1'}>
          {isEditMode ? 'Editar libro' : 'Añadir libro'}
        </Typography>
      </header>

      <section className={classes.textFieldsContainer}>
        <label htmlFor="title" className={classes.hiddeLabel}>
          Título
        </label>
        <TextField
          value={book.title}
          id="title"
          onChange={handleFieldChange('title')}
          label="Título"
          variant="outlined"
        />
        <Autocomplete
          value={book.authors}
          multiple
          id="authors"
          options={availableAuthors}
          getOptionLabel={(option: Lookup) => option.name}
          filterSelectedOptions
          onChange={handleFieldChange('authors')}
          renderInput={params => <TextField {...params} label="Autores" />}
        />
      </section>

      <Button variant="contained" component="span" onClick={() => fileInput.current.click()} className={classes.button}>
        <AddPhotoAlternateIcon /> <span>Añadir imagen</span>
      </Button>
      <input type="file" ref={fileInput} style={{ display: 'none' }} onChange={handleFileChange} />
      {book.imageUrl && (
        <>
          <Typography variant="caption">Archivo seleccionado: {book.imageUrl}</Typography>
          <label htmlFor="imageAltText" className={classes.hiddeLabel}>
            Título
          </label>
          <TextField
            value={book.imageAltText}
            id="imageAltText"
            onChange={handleFieldChange('imageAltText')}
            label="Descripción de la imagen"
            variant="outlined"
          />
        </>
      )}

      <label htmlFor="description" className={classes.hiddeLabel}>
        Descripción del Libro
      </label>
      <TextField
        id="description"
        value={book.description}
        onChange={handleFieldChange('description')}
        label="Descripción del libro"
        variant="outlined"
        minRows={4}
        multiline
      />

      <Button onClick={handleSaveBook} variant="contained">
        {isEditMode ? 'Actualizar libro' : 'Añadir libro'}
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
