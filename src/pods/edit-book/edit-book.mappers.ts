import { Book as apiModel } from '@/core/mocks';
import { BookVm } from './edit-book.vm';

export const mapBookInfoFromApiToVm = (book: apiModel): BookVm => ({
  id: book.id,
  title: book.title,
  authors: book.authors,
  description: book.description,
  imageUrl: book.imageUrl,
});

export const createEmptyBook = (): BookVm => ({
  id: '',
  title: '',
  authors: [],
  description: '',
  imageUrl: '',
});
