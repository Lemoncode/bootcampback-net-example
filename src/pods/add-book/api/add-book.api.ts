import axios from 'axios';
import { bookList, Book } from '@/core/mocks';
import { BookVm } from '../add-book.vm';

export const addBook = async (book?: BookVm): Promise<boolean> => true;

export const saveImage = async (file: File): Promise<{ id: string }> => {
  const formData = new FormData();
  formData.append('file', file);

  const baseUrl = '/api/books/newImage';
  const { data } = await axios.post(baseUrl, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};
