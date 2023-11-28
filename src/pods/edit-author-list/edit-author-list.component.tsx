import React from 'react';
import { Author } from './edit-author-list.vm';

interface Props {
  totalRows: number;
  authorList: Author[];
}

export const EditAuthorList: React.FC<Props> = props => {
  const { totalRows, authorList } = props;
  return (
    <>
      <h1>{totalRows}</h1>
      {authorList.map(author => (
        <h2 key={author.id}>{author.firstName}</h2>
      ))}
    </>
  );
};
