import React from 'react';
import { Backdrop, Button, Dialog, DialogActions, DialogContent, DialogTitle, Rating, TextField } from '@mui/material';
import { Review, createEmptyReview } from '../book.vm';
import * as api from '../api';
import { mapReviewFromVmToApi } from '../book.mappers';
import { useNotificationContext } from '@/core/notification';
import * as classes from './edit-review.styles';

interface Props {
  review?: Review;
  bookId?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const EditReview: React.FC<Props> = props => {
  const { review, bookId, isOpen, onClose } = props;
  const [formReview, setFormReview] = React.useState(createEmptyReview);
  const { notify } = useNotificationContext();

  const handleSubmit = () =>
    api
      .saveReview(mapReviewFromVmToApi(formReview))
      .then(() => onClose())
      .then(() => setFormReview(createEmptyReview))
      .then(() => notify('Reseña guardada con éxito'))
      .catch(() => notify('Error al guardar la reseña'));

  React.useEffect(() => {
    if (bookId) {
      setFormReview({ ...formReview, bookId });
    }
  }, [bookId]);

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
        <Button onClick={onClose} aria-label="Cancelar edición de la reseña">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} aria-label="Guardar la reseña">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
