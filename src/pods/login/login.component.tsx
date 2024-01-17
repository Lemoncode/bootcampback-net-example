import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import * as classes from './login.styles';

interface Props {
  onLoginGoogle: () => void;
  onLoginMicrosoft: () => void;
}

export const Login: React.FC<Props> = props => {
  const { onLoginGoogle, onLoginMicrosoft } = props;

  return (
    <div className={classes.root} aria-label="Inicio de Sesión">
      <Paper className={classes.paper}>
        <Typography variant="h3" component="h1" align="center">
          Iniciar Sesión
        </Typography>
        <div className={classes.buttonGroup}>
          <Button
            variant="contained"
            aria-label="Iniciar sesión con Google"
            fullWidth
            startIcon={<FaGoogle />}
            onClick={onLoginGoogle}
          >
            Iniciar sesión con Google
          </Button>
          <Button
            variant="contained"
            aria-label="Iniciar sesión con Microsoft"
            fullWidth
            startIcon={<FaMicrosoft />}
            onClick={onLoginMicrosoft}
          >
            Iniciar sesión con Microsoft
          </Button>
        </div>
      </Paper>
    </div>
  );
};
