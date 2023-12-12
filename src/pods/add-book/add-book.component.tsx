import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Chip, IconButton, Autocomplete } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Lookup } from '@/common/models';
import { switchRoutes } from '@/core/router';
import { BookVm, createEmptyBook } from './add-book.vm';
import { saveImage } from './api';
import * as classes from './add-book.styles';

interface Props {
  authorList: Lookup[];
  isEditMode?: boolean;
  book: BookVm;
  setBook: (book: BookVm) => void;
  addBook: (book: BookVm) => void;
}

export const AddBookComponent: React.FC<Props> = props => {
  const { addBook, authorList, isEditMode, book, setBook } = props;
  const navigate = useNavigate();
  const [fileName, setFileName] = React.useState<string>('');
  const fileInput = React.useRef(null);

  const handleGoBack = () => {
    navigate(switchRoutes.editBookList);
  };

  const handleFieldChange = (fieldId: string) => (e: React.ChangeEvent<HTMLInputElement>, value?: Lookup[]) => {
    if (Boolean(!value)) return setBook({ ...book, [fieldId]: e.target.value });
    setBook({ ...book, [fieldId]: value });
  };

  const handleSaveBook = () => {
    addBook(book);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files[0];
      setFileName(file.name);
      saveImage(file).then(imageUrl => {
        setBook({ ...book, imageUrl: imageUrl.id });
      });
    } catch (error) {
      throw new Error(error);
    }
  };
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
          multiple
          id="authors"
          options={authorList}
          getOptionLabel={(option: Lookup) => option.name}
          filterSelectedOptions
          onChange={handleFieldChange('authors')}
          renderInput={params => <TextField {...params} label="Autores" />}
        />
      </section>

      <Button variant="contained" component="span" onClick={() => fileInput.current.click()}>
        Añadir imagen
      </Button>
      <input type="file" ref={fileInput} style={{ display: 'none' }} onChange={handleFileChange} />
      {fileName && (
        <>
          <Typography variant="caption">Archivo seleccionado: {fileName}</Typography>{' '}
          <label htmlFor="imageAltText" className={classes.hiddeLabel}>
            Título
          </label>
          <TextField
            id="imageAltText"
            onChange={handleFieldChange('imageAltText')}
            label="Descripción de la imagen"
            variant="outlined"
          />
        </>
      )}

      <label htmlFor="description" className={classes.hiddeLabel}>
        Descripción
      </label>
      <TextField
        id="description"
        value={book.description}
        onChange={handleFieldChange('description')}
        label="Descripción"
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
