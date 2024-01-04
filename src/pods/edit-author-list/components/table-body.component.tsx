import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, TableRow, TableCell, TableBody as Body } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, AddCircle as AddCircleIcon } from '@mui/icons-material';
import { switchRoutes } from '@/core/router';
import { Author } from '../edit-author-list.vm';

interface Props {
  authorList: Author[];
  onDelete: (id: string) => void;
}

export const TableBody: React.FC<Props> = props => {
  const { authorList, onDelete } = props;
  const navigate = useNavigate();
  return (
    <Body>
      {authorList.map((author, index) => (
        <TableRow key={index}>
          <TableCell>{author.firstName}</TableCell>
          <TableCell>{author.lastName}</TableCell>
          <TableCell>{author.bookCount}</TableCell>
          <TableCell>
            <IconButton
              onClick={() => navigate(switchRoutes.editAuthor(author.id.toString()))}
              aria-label={`editar ${author.firstName}`}
              size="large"
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => onDelete(author.id.toString())}
              aria-label={`borrar ${author.firstName}`}
              size="large"
            >
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </Body>
  );
};
