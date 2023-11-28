import React from 'react';
import { Author } from './edit-author-list.vm';
import { Pagination, PaginationItem } from '@mui/material';
import { PAGE_SIZE } from './edit-author-list.constants';

interface Props {
  totalRows: number;
  authorList: Author[];
  currentPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export const EditAuthorList: React.FC<Props> = props => {
  const { totalRows, authorList, currentPage, onPageChange } = props;
  const totalPages = Math.ceil(totalRows / PAGE_SIZE);
  return (
    <>
      <h1>{totalRows}</h1>
      {authorList.map(author => (
        <h2 key={author.id}>{author.firstName}</h2>
      ))}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
        renderItem={item => (
          <PaginationItem
            {...item}
            aria-label={item.type === 'page' ? `Ir a la página ${item.page}` : `Ir a ${item.type}`}
          />
        )}
      />
    </>
  );
};
