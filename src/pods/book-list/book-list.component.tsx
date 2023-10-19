import React from 'react';
import { Book } from './api';
import * as classes from './book-list.styles';

interface Props {
  bookList: Book[];
  className?: string;
}

export const BookList: React.FC<Props> = props => {
  const { bookList, className } = props;

  return (
    <div className={className}>
      <h1>Libros</h1>
      <div className={classes.root}>
        {bookList.map(book => (
          <ul key={book.id} className={classes.container}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
          </ul>
        ))}
      </div>
    </div>
  );
};
