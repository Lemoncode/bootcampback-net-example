import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Chip, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { switchRoutes } from '@/core/router';
import { BookVm, createEmptyBook } from './add-book.vm';
import * as classes from './add-book.styles';
import { saveImage } from './api';

interface Props {
  addBook: (book: BookVm) => void;
}

export const AddBookComponent: React.FC<Props> = props => {
  const { addBook } = props;
  const [bookInfo, setBookInfo] = React.useState(createEmptyBook());
  const [autores, setAutores] = React.useState(bookInfo.authors);
  const [fileName, setFileName] = React.useState<string>('');
  const [newAuthor, setNewAuthor] = React.useState('');
  const fileInput = React.useRef(null);

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files[0];
      setFileName(file.name);
      saveImage(file).then(imageUrl => {
        console.log(imageUrl.id);
        setBookInfo({ ...bookInfo, imageUrl: imageUrl.id });
      });
    } catch (error) {
      throw new Error(error);
    }
  };
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
        <TextField id="title" onChange={handleFieldChange('title')} label="Título" variant="outlined" />

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

      <Button variant="contained" component="span" onClick={() => fileInput.current.click()}>
        Añadir imagen
      </Button>
      <input type="file" ref={fileInput} style={{ display: 'none' }} onChange={handleFileChange} />
      {fileName && <Typography variant="caption">Archivo seleccionado: {fileName}</Typography>}
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
