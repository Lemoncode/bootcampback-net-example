import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, IconButton, Autocomplete } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Lookup } from '@/common/models';
import { useNotificationContext } from '@/core/notification';
import {
  BookFieldsErrors,
  BookVm,
  createEmptyBook,
  createEmptyFieldsErrors,
  createEmptyValidationResult,
} from './edit-book.vm';
import { formValidation } from './edit-book.validations';
import * as api from './api';
import * as classes from './edit-book.styles';

interface Props {
  authorList: Lookup[];
  book: BookVm;
  onSubmit: (book: BookVm) => void;
}

export const EditBook: React.FC<Props> = props => {
  const { onSubmit, authorList, book } = props;
  const navigate = useNavigate();
  const { notify } = useNotificationContext();

  const [formData, setFormData] = React.useState<BookVm>(createEmptyBook);
  const [errors, setErrors] = React.useState<BookFieldsErrors>(createEmptyFieldsErrors);

  const fileInput = React.useRef(null);
  const availableAuthors = authorList.filter(
    author => !book.authors.some(selectedAuthor => selectedAuthor.id === author.id)
  );
  const handleGoBack = () => navigate(-1);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    api
      .saveImage(file)
      .then(imageUrl => {
        setFormData({ ...formData, imageUrl: imageUrl.id });
        setErrors({ ...errors, imageUrl: createEmptyValidationResult() });
      })
      .catch(() => notify('Error al subir la imagen', 'error'));
  };

  const validateForm = () =>
    formValidation.validateForm(formData).then(validationResult => {
      setErrors(validationResult.fieldErrors as unknown as BookFieldsErrors);
      return validationResult.succeeded;
    });

  const validateField = (field: keyof BookVm) => {
    formValidation.validateField(field, formData[field]).then(validationResult => {
      setErrors({
        ...errors,
        [field]: validationResult,
      });
    });
  };

  const handleOnFieldChange = (field: keyof BookVm) => (e: React.ChangeEvent<HTMLInputElement>, value?: Lookup[]) => {
    validateField(field);
    if (Boolean(!value)) return setFormData({ ...formData, [field]: e.target.value });
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm().then(success => {
      if (success) {
        onSubmit(formData);
      }
    });
  };

  React.useEffect(() => {
    if (book.id) {
      setFormData(book);
    }
  }, [book]);

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <header>
        <Typography className={classes.title} variant="h1" component={'h1'}>
          {book.id ? 'Editar libro' : 'Añadir libro'}
        </Typography>
      </header>

      <section className={classes.textFieldsContainer}>
        <label htmlFor="title" className={classes.hiddeLabel}>
          Título
        </label>
        <TextField
          value={formData.title}
          id="title"
          onChange={handleOnFieldChange('title')}
          label="Título"
          variant="outlined"
          error={!errors.title.succeeded}
          helperText={errors.title.message}
        />
        <Autocomplete
          value={formData.authors}
          multiple
          id="authors"
          options={availableAuthors}
          getOptionLabel={(option: Lookup) => option.name}
          filterSelectedOptions
          onChange={handleOnFieldChange('authors')}
          renderInput={params => (
            <TextField
              {...params}
              label="Autores"
              error={!errors.authors.succeeded}
              helperText={errors.authors.message}
            />
          )}
        />
      </section>

      <Button variant="contained" component="span" onClick={() => fileInput.current.click()} className={classes.button}>
        <AddPhotoAlternateIcon /> <span>Añadir imagen</span>
      </Button>
      {!errors.imageUrl.succeeded && (
        <Typography color="error" variant="caption">
          {errors.imageUrl.message}
        </Typography>
      )}
      <input type="file" ref={fileInput} style={{ display: 'none' }} onChange={handleFileChange} />
      {formData.imageUrl && (
        <>
          <Typography variant="caption">Archivo seleccionado: {formData.imageUrl}</Typography>
          <label htmlFor="imageAltText" className={classes.hiddeLabel}>
            Título
          </label>
          <TextField
            value={formData.imageAltText}
            id="imageAltText"
            onChange={handleOnFieldChange('imageAltText')}
            label="Descripción de la imagen"
            variant="outlined"
            error={!errors.imageAltText.succeeded}
            helperText={errors.imageAltText.message}
          />
        </>
      )}

      <label htmlFor="description" className={classes.hiddeLabel}>
        Descripción del Libro
      </label>
      <TextField
        id="description"
        value={formData.description}
        onChange={handleOnFieldChange('description')}
        label="Descripción del libro"
        variant="outlined"
        minRows={4}
        multiline
        error={!errors.description.succeeded}
        helperText={errors.description.message}
      />

      <Button type="submit" variant="contained">
        {formData.id ? 'Actualizar libro' : 'Añadir libro'}
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
    </form>
  );
};
