import axios from 'axios';
import { Author } from './edit-autor.api-model';

export const saveAuthor = (author: Author): Promise<boolean> =>
  author.id
    ? axios.put<boolean>(`/api/authors`, author).then(response => response.data)
    : axios.post<boolean>('/api/authors', author).then(response => response.data);

export const getAuthor = async (id: string): Promise<Author> => {
  const { data } = await axios.get<Author>(`/api/authors/${id}`);
  return data;
};
