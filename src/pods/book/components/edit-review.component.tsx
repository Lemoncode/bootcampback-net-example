import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Rating, TextField } from '@mui/material';
import { Review, createEmptyReview } from '../book.vm';
import * as classes from './edit-review.styles';

interface Props {
  review?: Review;
  isOpen: boolean;
  onSaveReview: (review: Review) => void;
  onClose: () => void;
}

export const EditReview: React.FC<Props> = props => {
  const { review, isOpen, onSaveReview, onClose } = props;
  const { id } = useParams();
  
  const [formReview, setFormReview] = React.useState(createEmptyReview);

  const handleCancel = () => {
    onClose();
    setFormReview(createEmptyReview);
  };

  const handleSubmit = () => {
    onSaveReview(formReview);
    onClose();
    setFormReview(createEmptyReview);
  };

  React.useEffect(() => {
    if (review && id) {
      setFormReview({ ...review, bookId: id });
    }
  }, [review, id]);

  return (
    <Dialog open={isOpen} onClose={onClose} className={classes.root}>
      <DialogTitle id="edit-review-title">Reseña</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <TextField
          value={formReview.reviewText}
          autoFocus
          margin="dense"
          id="review"
          label="Escribe aquí tu reseña"
          fullWidth
          variant="standard"
          onChange={event => setFormReview({ ...formReview, reviewText: event.target.value })}
          aria-label="Campo de texto para crear o editar la reseña"
        />
        <Rating
          name="rating"
          value={formReview.stars}
          onChange={(_, newValue) => {
            setFormReview({ ...formReview, stars: newValue });
          }}
          aria-label="Calificación de la reseña"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} aria-label="Cancelar edición de la reseña">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} aria-label="Guardar la reseña">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
