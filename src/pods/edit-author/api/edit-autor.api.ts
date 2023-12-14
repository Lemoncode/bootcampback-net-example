import axios from 'axios';
import { Author } from './edit-autor.api-model';

export const saveAuthor = async (author: Author): Promise<boolean> => {
  const { data } = await axios.post<boolean>('api/authors', author);
  return data;
};

export const getAuthor = async (id: string): Promise<Author> => {
  const { data } = await axios.get<Author>(`api/authors/${id}`);
  return data;
};
