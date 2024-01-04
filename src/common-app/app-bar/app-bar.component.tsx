import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import UserIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/ExitToApp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useAuthContext } from '@/core/auth';
import { switchRoutes } from '@/core/router';
import * as classes from './app-bar.styles';

export const AppBarComponent: React.FC = () => {
  const navigate = useNavigate();
  const { isUserLogged, setIsUserLogged } = useAuthContext();

  const handleClick = () => {
    setIsUserLogged(false);
    navigate(switchRoutes.root);
  };

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.root} variant="dense">
        <Link className={classes.link} to={switchRoutes.root} aria-label="Navegar a página principal">
          <HomeIcon fontSize="large" />
        </Link>
        <div className={classes.rightContainer}>
          {isUserLogged && (
            <Link className={classes.link} to={switchRoutes.dashboard} aria-label="Navegar al dashboard">
              <DashboardIcon fontSize="large" />
            </Link>
          )}
          {!isUserLogged && (
            <Link className={classes.link} to={switchRoutes.login} aria-label="Navegar a página de login">
              <UserIcon fontSize="large" />
            </Link>
          )}
          <IconButton color="inherit" onClick={handleClick} aria-label="Cerrar sesión">
            <LogoutIcon fontSize="large" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};
