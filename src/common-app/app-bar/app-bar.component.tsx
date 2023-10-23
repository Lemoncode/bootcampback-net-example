import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import UserIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/ExitToApp';
import { routes } from '@/core/router';
import * as api from './api';
import * as classes from './app-bar.styles';

export const AppBarComponent: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    await api.logout();
    navigate(routes.root);
  };

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.root} variant="dense">
        <IconButton
          color="inherit"
          onClick={() => {
            navigate(routes.bookList);
          }}
          aria-label="Ir a la lista de libros"
        >
          <HomeIcon fontSize="large" />
        </IconButton>
        <div>
          <IconButton color="inherit" aria-label="Abrir menú de usuario">
            <UserIcon fontSize="large" />
          </IconButton>
          <IconButton color="inherit" onClick={handleClick} aria-label="Cerrar sesión">
            <LogoutIcon fontSize="large" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};
