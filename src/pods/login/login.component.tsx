import React from 'react';
import { Button, Paper, TextField, Typography } from '@mui/material';
import * as classes from './login.styles';

export const LoginComponent: React.FC = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // Agregar lógica de inicio de sesión aquí
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h3" component="h1" align="center">
          Iniciar Sesión
        </Typography>
        <form onSubmit={handleSubmit} aria-label="Formulario de inicio de sesión">
          <TextField
            className={classes.input}
            fullWidth
            label="Correo Electrónico"
            type="email"
            variant="outlined"
            required
          />
          <TextField
            className={classes.input}
            fullWidth
            label="Contraseña"
            type="password"
            variant="outlined"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Iniciar Sesión
          </Button>
        </form>
      </Paper>
    </div>
  );
};