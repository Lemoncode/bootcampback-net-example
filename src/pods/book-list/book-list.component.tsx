import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Book } from './api';
import * as classes from './book-list.styles';

interface Props {
  bookList: Book[];
}

export const BookList: React.FC<Props> = props => {
  const { bookList } = props;

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h1" component={'h1'} aria-label="tienda online, listado de libros">
        Libros
      </Typography>
      <div className={classes.cardContainer}>
        {bookList.map(book => (
          // <ul key={book.id} className={classes.container}>
          //   <img src={book.image} alt={book.title} />
          //   <h3>{book.title}</h3>
          // </ul>
          <Card className={classes.card}>
            <CardMedia image={book.image} title={`Portada del libro ${book.title}`} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {book.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Compartir</Button>
              <Button size="small">Leer más</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};
