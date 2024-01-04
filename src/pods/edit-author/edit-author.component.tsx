import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { switchRoutes } from '@/core/router';
import { AuthorVm, AuthorFieldsErrors, createEmptyAuthor, createEmptyFieldsErrors } from './edit-author.vm';
import { formValidation } from './edit-author.validations';
import * as classes from './edit-author.styles';

interface Props {
  author: AuthorVm;
  onSave: (author: AuthorVm) => void;
}

export const EditAuthor: React.FC<Props> = props => {
  const { author, onSave } = props;
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<AuthorVm>(createEmptyAuthor);
  const [errors, setErrors] = React.useState<AuthorFieldsErrors>(createEmptyFieldsErrors());

  const isEditingMode = Boolean(author.id);

  const validateForm = () =>
    formValidation.validateForm(formData).then(validationResult => {
      setErrors(validationResult.fieldErrors as unknown as AuthorFieldsErrors);
      return validationResult.succeeded;
    });

  const validateField = (field: keyof AuthorVm) => {
    formValidation.validateField(field, formData[field]).then(validationResult => {
      setErrors({
        ...errors,
        [field]: validationResult,
      });
    });
  };

  const handleOnFieldChange = (field: keyof AuthorVm) => (e: React.ChangeEvent<HTMLInputElement>) => {
    validateField(field);
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm().then(success => {
      if (success) {
        onSave(formData);
      }
    });
  };

  React.useEffect(() => {
    if (author.id) {
      setFormData(author);
    }
  }, [author]);

  return (
    <div className={classes.root}>
      <header>
        <Typography className={classes.title} variant="h1" component={'h1'}>
          {isEditingMode ? 'Editar autor' : 'Añadir autor'}
        </Typography>
      </header>

      <form className={classes.textFieldsContainer} onSubmit={handleSubmit}>
        <div className={classes.fieldContainer}>
          <label htmlFor="firstname" className={classes.hiddeLabel}>
            Nombre
          </label>
          <TextField
            value={formData.firstName}
            id="firstname"
            onChange={handleOnFieldChange('firstName')}
            label="Nombre"
            variant="outlined"
            aria-describedby="firstNameError"
            error={!errors.firstName.succeeded}
            helperText={errors.firstName.message}
            autoComplete="off"
          />
        </div>
        <div className={classes.fieldContainer}>
          <label htmlFor="lastname" className={classes.hiddeLabel}>
            Apellidos
          </label>
          <TextField
            value={formData.lastName}
            id="lastname"
            onChange={handleOnFieldChange('lastName')}
            label="Apellidos"
            variant="outlined"
            aria-describedby="lastNameError"
            error={!errors.lastName.succeeded}
            helperText={errors.lastName.message}
            autoComplete="off"
          />
        </div>

        <Button type="submit" variant="contained" className={classes.button}>
          {isEditingMode ? 'Actualizar autor' : 'Crear autor'}
        </Button>
      </form>

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
