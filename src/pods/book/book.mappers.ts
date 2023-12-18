import { Book } from './api';
import { BookVm } from './book.vm';

export const mapBookFromApiToVm = (book: Book): BookVm => ({
  title: book.title,
  imageUrl: book.imageUrl,
  imageAltText: book.imageAltText,
  description: book.description,
  authors: book.authors.map(author => ({
    id: author.id.toString(),
    firstName: author.firstName,
    lastName: author.lastName,
  })),
  reviews: book.reviews,
});
