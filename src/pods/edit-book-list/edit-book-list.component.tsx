import React from 'react';
import { BookVm } from './edit-book-list.vm';

interface Props {
  bookList: BookVm[];
}

export const EditBookListComponent: React.FC<Props> = props => {
  const { bookList } = props;

  return (
    <div>
      <h1>Hello edit books!!</h1>
      <ul>
        {bookList.map(book => (
          <>
            <li key={book.id}>{book.id}</li>
            <li key={book.id}>{book.title}</li>
            {book.authors.map(author => (
              <li key={author}>{author}</li>
            ))}
          </>
        ))}
      </ul>
    </div>
  );
};
