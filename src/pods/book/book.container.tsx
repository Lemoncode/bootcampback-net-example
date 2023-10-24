import React from 'react';
import { useParams } from 'react-router-dom';
import { getBook } from './api';
import { createEmptyBook } from './book.vm';
import { BookComponent } from './book.component';

export const Book: React.FC = () => {
  const [book, setBook] = React.useState(createEmptyBook());
  const { id } = useParams();

  React.useEffect(() => {
    getBook(id).then(setBook);
  }, []);

  return <BookComponent book={book} />;
};
