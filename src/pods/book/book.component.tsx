import React from 'react';
import { Button, IconButton, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import EditIcon from '@mui/icons-material/Edit';
import { useAuthContext } from '@/core/auth';
import { EditReview } from './components/edit-review.component';
import { BookVm, Review, createEmptyReview } from './book.vm';
import * as classes from './book.styles';

interface Props {
  book: BookVm;
}

export const BookComponent: React.FC<Props> = props => {
  const { book } = props;
  const { isUserLogged } = useAuthContext();
  const [open, setOpen] = React.useState<boolean>(false);
  const [editingReview, setEditingReview] = React.useState(createEmptyReview);

  const handleEditClick = (review: Review) => {
    setEditingReview(review);
    setOpen(true);
  };
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <img src={book.imageUrl} alt={book.imageAltText} aria-label={`Portada del libro ${book?.title}`} />
      <div>
        <Typography
          className={classes.title}
          variant="h2"
          component={'h2'}
          aria-label={`Título del libro: ${book?.title}`}
        >
          {book?.title}
        </Typography>
        {book.authors.map((author, index) => (
          <Typography variant="h6" component={'h3'} key={index} aria-label={`Autor ${index + 1}: ${author}`}>
            {author.firstName} {author.lastName}
          </Typography>
        ))}
        <Typography variant="body1" component={'p'} aria-label="Descripción del libro">
          {book.description}
        </Typography>
        {book?.reviews.length > 0 && (
          <div className={classes.reviewsContainer}>
            <Typography variant="h4" component={'h4'} aria-label="Reseñas" tabIndex={1}>
              Reseñas:
            </Typography>
            {book?.reviews.map((review, index) => (
              <div
                className={classes.reviewContainer}
                key={review.id}
                aria-label={`Reseña ${review.reviewer}`}
                tabIndex={2}
              >
                <div className={classes.row}>
                  <Typography id={`autor-reseña-${index}`} component={'p'}>
                    {review.reviewer}
                  </Typography>
                  {isUserLogged && (
                    <IconButton aria-label="Editar reseña" onClick={() => handleEditClick(review)}>
                      <EditIcon className={classes.editIcon} />
                    </IconButton>
                  )}
                </div>
                <Rating
                  value={review.stars}
                  aria-label={`Calificación dada por ${review.reviewer}. ${review.stars} de 5 estrellas.`}
                />
                <Typography variant="body1" component={'p'} aria-labelledby={`review-text-${index}`}>
                  {review.reviewText}
                </Typography>
                <Typography variant="body2" component={'p'} aria-labelledby={`review-creation-date-${index}`}>
                  {review.creationDate}
                </Typography>
                <EditReview isOpen={open} onClose={handleClose} bookId={book.id} />
              </div>
            ))}
            {isUserLogged && (
              <>
                <Button variant="contained" color="primary" aria-label="Crear reseña" onClick={handleClickOpen}>
                  Crear Reseña
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
