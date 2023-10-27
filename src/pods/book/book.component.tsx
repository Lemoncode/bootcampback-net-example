import React from 'react';
import { Typography } from '@mui/material';
import { BookVm } from './book.vm';
import * as classes from './book.styles';

interface Props {
  book: BookVm;
}

export const BookComponent: React.FC<Props> = ({ book }) => {
  return (
    <div className={classes.root}>
      <img src={book?.image} alt={`Portada del libro ${book?.title}`} aria-label={`Portada del libro ${book?.title}`} />
      <div>
        <Typography
          className={classes.title}
          variant="h2"
          component={'h2'}
          aria-label={`Título del libro: ${book?.title}`}
        >
          {book?.title}
        </Typography>
        {book?.authors.map((author, index) => (
          <Typography variant="h6" component={'h3'} key={index} aria-label={`Autor ${index + 1}: ${author}`}>
            {author}
          </Typography>
        ))}
        <Typography variant="body1" component={'p'} aria-label="Descripción del libro">
          {book?.description}
        </Typography>
        <div className={classes.reviewsContainer}>
          <Typography variant="h6" component={'h4'} aria-label="Reseñas" tabIndex={1}>
            Reseñas:
          </Typography>
          {book?.reviews.map((review, index) => (
            <div className={classes.reviewContainer} key={index} aria-label={`Reseña ${index + 1}`} tabIndex={2}>
              <Typography component={'p'} aria-label={`Autor de reseña ${index + 1}: ${review.reviewer}`}>
                {review.reviewer}
              </Typography>
              <Typography variant="body1" component={'p'} aria-label={`Título de la reseña ${index + 1}`}>
                {review.title}
              </Typography>
              <Typography variant="body2" component={'p'} aria-label={`Texto de la reseña ${index + 1}`}>
                {review.text}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
