import React from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from './api';
import { mapBookFromApiToVm } from './book.mappers';
import { createEmptyBook } from './book.vm';
import { BookComponent } from './book.component';

export const Book: React.FC = () => {
  const [book, setBook] = React.useState(createEmptyBook());
  const { id } = useParams();

  const loadBook = async () => {
    try {
      const book = await getBookById(id);
      setBook(mapBookFromApiToVm(book));
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {
    loadBook();
  }, []);

  return <BookComponent book={book} />;
};
