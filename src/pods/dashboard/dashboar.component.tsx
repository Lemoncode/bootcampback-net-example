import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import * as classes from './dashboar.styles';
import { switchRoutes } from '@/core/router';

export const DashboardComponent: React.FC = () => {
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h1" component="h1">
        Dashboard
      </Typography>
      <div className={classes.cardContainer}>
        <Link className={classes.card} to={switchRoutes.edicionLibros} aria-label="Edición, lista de libros">
          <BookIcon className={classes.cardIcon} />
          <Typography variant="button" component="div">
            Libros
          </Typography>
        </Link>
        <Link className={classes.card} to={switchRoutes.edicionAutores} aria-label="Edición, lista de autores">
          <PersonIcon className={classes.cardIcon} />
          <Typography variant="button" component="div">
            Autores
          </Typography>
        </Link>
      </div>
    </div>
  );
};
