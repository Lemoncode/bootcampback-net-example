import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { switchRoutes } from '@/core/router';
import { AuthorVm, ValidateAuthorFields } from './edit-author.vm';
import * as classes from './edit-author.styles';
import { formValidation } from './edit-author.validations';

interface Props {
  isEditingMode?: boolean;
  author: AuthorVm;
  errors: ValidateAuthorFields;
  setAuthor: (author: AuthorVm) => void;
  onSubmit: (newAuthor: AuthorVm) => void;
  onErrors: (errors: ValidateAuthorFields) => void;
}

export const EditAuthor: React.FC<Props> = props => {
  const { author, errors, isEditingMode, onSubmit, setAuthor, onErrors } = props;

  const navigate = useNavigate();

  const handleFieldChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor({ ...author, [field]: e.target.value });

    formValidation.validateField(field, e.target.value).then(fieldValidationResult => {
      onErrors({ ...errors, [field]: fieldValidationResult.message });
    });
  };

  return (
    <div className={classes.root}>
      <header>
        <Typography className={classes.title} variant="h1" component={'h1'}>
          {isEditingMode ? 'Editar autor' : 'Añadir autor'}
        </Typography>
      </header>

      <section className={classes.textFieldsContainer}>
        <div className={classes.fieldContainer}>
          <label htmlFor="firstname" className={classes.hiddeLabel}>
            Nombre
          </label>
          <TextField
            value={author.firstName}
            id="firstname"
            onChange={handleFieldChange('firstName')}
            label="Nombre"
            variant="outlined"
            aria-describedby="firstNameError"
          />
          <Typography id="firstNameError" className={classes.error} variant="caption" component={'span'}>
            {errors.firstName}
          </Typography>
        </div>
        <div className={classes.fieldContainer}>
          <label htmlFor="lastname" className={classes.hiddeLabel}>
            Apellidos
          </label>
          <TextField
            value={author.lastName}
            id="lastname"
            onChange={handleFieldChange('lastName')}
            label="Apellidos"
            variant="outlined"
            aria-describedby="lastNameError"
          />
          <Typography id="lastNameError" className={classes.error} variant="caption" component={'span'}>
            {errors.lastName}
          </Typography>
        </div>
      </section>

      <Button onClick={() => onSubmit(author)} variant="contained">
        {isEditingMode ? 'Actualizar autor' : 'Crear autor'}
      </Button>

      <IconButton
        className={classes.goBack}
        onClick={() => navigate(switchRoutes.editAuthorList)}
        aria-label="Volver al listado de edición de authores"
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
