import axios from 'axios';
import { Author, EditAuthorListResponse } from '@/core/mocks';
import { Book, SaveBook } from './edit-book.api-model';

export const saveBook = async (book: SaveBook): Promise<boolean> => {
  const { data } = book.id ? await axios.put(`/api/books/${book.id}`, book) : await axios.post('/api/books', book);
  return data;
};

export const getActhorList = async (): Promise<Author[]> => {
  const { data } = await axios.get<EditAuthorListResponse>('/api/authors');
  return data.results;
};

export const getBook = async (id: string): Promise<Book> => {
  const { data } = await axios.get<Book>(`/api/books/${id}`);
  return data;
};

export const saveImage = async (file: File): Promise<{ id: string }> => {
  const formData = new FormData();
  formData.append('file', file);

  const { data } = await axios.post('/api/books/newImage', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};
