import { Book as apiModel } from '@/core/mocks';
import { BookVm } from './edit-book.vm';

export const mapBookInfoFromApiToVm = (book: apiModel): BookVm => ({
  id: book.id,
  title: book.title,
  authors: book.authors,
  description: book.description,
  imageUrl: book.imageUrl,
  imageAltText: book.imageAltText,
});

