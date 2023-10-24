import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { switchRoutes } from '@/core/router';
import { Book } from './api';
import * as classes from './book-list.styles';

interface Props {
  bookList: Book[];
}

export const BookList: React.FC<Props> = props => {
  const { bookList } = props;

  return (
    //
    <div className={classes.root} role="region">
      <Typography className={classes.title} variant="h1" component="h1" aria-label="Tienda online, listado de libros">
        Libros
      </Typography>
      <div className={classes.cardContainer} role="list">
        {bookList.map(book => (
          <Card className={classes.card} component="article" key={book.id} role="listitem" tabIndex={0}>
            <CardMedia image={book.image} title={`Portada del libro ${book.title}`} />
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
                onClick={() => console.log(switchRoutes.bookDetail(book.id))}
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
