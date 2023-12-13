import { Book } from '@/core/mocks';
import { BookVm } from './book.vm';

export const mapBookFromApiToVm = (book: Book): BookVm => ({
  title: book.title,
  imageUrl: book.imageUrl,
  imageAltText: book.imageAltText,
  description: book.description,
  authors: book.authors,
  reviews: book.reviews,
});
