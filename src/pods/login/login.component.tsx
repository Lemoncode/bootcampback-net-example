import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { FaGoogle } from 'react-icons/fa';
import * as classes from './login.styles';

interface Props {
  onLogin: () => void;
}

export const Login: React.FC<Props> = props => {
  const { onLogin } = props;

  return (
    <div className={classes.root} aria-label="Inicio de Sesión">
      <Paper className={classes.paper}>
        <Typography variant="h3" component="h1" align="center">
          Iniciar Sesión
        </Typography>
        <Button
          variant="contained"
          aria-label="Iniciar sesión con Google"
          fullWidth
          startIcon={<FaGoogle />}
          onClick={onLogin}
        />
      </Paper>
    </div>
  );
};
