import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { switchRoutes } from '@/core/router';
import { AuthorVm } from './edit-author.vm';
import * as classes from './edit-author.styles';

interface Props {
  isEditingMode?: boolean;
  author: AuthorVm;
  setAuthor: (author: AuthorVm) => void;
  onSubmit: (newAuthor: AuthorVm) => void;
}

export const EditAuthor: React.FC<Props> = props => {
  const { onSubmit, isEditingMode, author, setAuthor } = props;
  const navigate = useNavigate();

  const handleFieldChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setAuthor({ ...author, [field]: e.target.value });

  return (
    <div className={classes.root}>
      <header>
        <Typography className={classes.title} variant="h1" component={'h1'}>
          {isEditingMode ? 'Editar autor' : 'Añadir autor'}
        </Typography>
      </header>

      <section className={classes.textFieldsContainer}>
        <label htmlFor="firstname" className={classes.hiddeLabel}>
          Nombre
        </label>
        <TextField
          value={author.firstName}
          id="firstname"
          onChange={handleFieldChange('firstName')}
          label="Nombre"
          variant="outlined"
        />
        <label htmlFor="lastname" className={classes.hiddeLabel}>
          Apellidos
        </label>
        <TextField
          value={author.lastName}
          id="lastname"
          onChange={handleFieldChange('lastName')}
          label="Apellidos"
          variant="outlined"
        />
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
