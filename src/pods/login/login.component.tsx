import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { FaGoogle } from 'react-icons/fa';
import { useAuth } from '@/core/auth';
import { switchRoutes } from '@/core/router';
import { Credentials, CredentialsErrors, createEmptyCredentials, createEmptyCredentialsError } from './login.vm';
import { formValidation } from './login.validations';
import * as classes from './login.styles';

interface Props {
  onLogin: (credentials: Credentials) => Promise<void>;
}

export const Login: React.FC<Props> = props => {
  const navigate = useNavigate();
  // const { setIsUserLogged } = useAuthContext();

  const { onLogin } = props;

  const [formData, setFormData] = React.useState<Credentials>(createEmptyCredentials);
  const [errors, setErrors] = React.useState<CredentialsErrors>(createEmptyCredentialsError);

  const validateForm = () =>
    formValidation.validateForm(formData).then(validationResult => {
      setErrors(validationResult.fieldErrors as unknown as CredentialsErrors);
      return validationResult.succeeded;
    });

  const validateField = (field: keyof Credentials) =>
    formValidation.validateField(field, formData[field]).then(validationResult => {
      setErrors({
        ...errors,
        [field]: validationResult,
      });
    });

  const handleOnFieldChange = (field: keyof Credentials) => (e: React.ChangeEvent<HTMLInputElement>) => {
    validateField(field);
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm().then(isValid => {
      if (isValid) {
        onLogin(formData).then(result => {
          // setIsUserLogged(true);
          // navigate(-1);
          console.log(result);
        });
      }
    });
  };

  const handleGoogleLogin = () => {
    window.location.href = switchRoutes.loginGoogle;
  };

  return (
    <div className={classes.root} aria-label="Inicio de Sesión">
      <Paper className={classes.paper}>
        <Typography variant="h3" component="h1" align="center">
          Iniciar Sesión
        </Typography>
        <form onSubmit={handleSubmit} aria-label="Formulario de inicio de sesión">
          <TextField
            className={classes.input}
            fullWidth
            label="Correo Electrónico"
            variant="outlined"
            error={!errors.email.succeeded}
            helperText={errors.email.message}
            onChange={handleOnFieldChange('email')}
            autoComplete="off"
          />
          <TextField
            className={classes.input}
            fullWidth
            label="Contraseña"
            type="password"
            variant="outlined"
            error={!errors.password.succeeded}
            helperText={errors.password.message}
            onChange={handleOnFieldChange('password')}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Iniciar Sesión
          </Button>
        </form>
        <Button
          variant="contained"
          aria-label="Iniciar sesión con Google"
          fullWidth
          startIcon={<FaGoogle />}
          onClick={handleGoogleLogin}
        />
      </Paper>
    </div>
  );
};
