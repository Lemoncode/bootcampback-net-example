import React from 'react';
import { Author } from './edit-author-list.vm';

interface Props {
  authorList: Author[];
}

export const EditAuthorList: React.FC<Props> = props => {
  const { authorList } = props;
  return <div>EditAuthorList</div>;
};
