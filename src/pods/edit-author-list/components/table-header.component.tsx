import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';

export const TableHeader: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Nombre</TableCell>
        <TableCell>Apellidos</TableCell>
        <TableCell>Número de libros</TableCell>
        <TableCell>Comandos</TableCell>
      </TableRow>
    </TableHead>
  );
};
