import React from 'react';
import { addBook } from './api';
import { AddBookComponent } from './add-book.component';

export const AddBook: React.FC = () => {
  const handleAddBook = () => {
    addBook();
    console.log('Add book');
  };
  return <AddBookComponent addBook={handleAddBook} />;
};
