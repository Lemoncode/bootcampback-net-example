import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { switchRoutes } from '@/core/router';
import { BookVm } from './book-list.vm';
import * as classes from './book-list.styles';

interface Props {
  bookList: BookVm[];
}

export const BookList: React.FC<Props> = props => {
  const { bookList } = props;
  return (
    <div className={classes.root} role="region">
      <Typography className={classes.title} variant="h1" component="h1" aria-label="Tienda online, listado de libros">
        Libros
      </Typography>
      <div className={classes.cardContainer} role="list">
        {bookList.map(book => (
          <Card className={classes.card} component="article" key={book.id} role="listitem" tabIndex={0}>
            <CardMedia
              component="img"
              image={book.imageUrl}
              title={`Portada del libro ${book.title}`}
              alt={book.imageAltText}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {book.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" aria-label={`Compartir enlace del libro ${book.title}`} role="button">
                Compartir
              </Button>
              <Link
                className={classes.link}
                to={switchRoutes.bookDetail(book.id)}
                role="link"
                aria-label={`Ver detalle del libro ${book.title}`}
              >
                Leer más
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};
