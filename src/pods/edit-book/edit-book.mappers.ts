import { Author } from './api';
import { Lookup } from '@/common/models';
import { BookVm } from './edit-book.vm';
import { Book, SaveBook } from './api';

export const mapActhorFromApiToVm = (actor: Author): Lookup => ({
  id: actor.id.toString(),
  name: `${actor.firstName} ${actor.lastName}`,
});

export const mapActhorListFromApiToVm = (actorList: Author[]): Lookup[] =>
  Boolean(actorList) ? actorList.map(mapActhorFromApiToVm) : [];

export const mapBookFromVmToApi = (book: BookVm): SaveBook => ({
  id: book.id ? Number(book.id) : undefined,
  title: book.title,
  authorIds: book.authors.map(author => Number(author.id)),
  description: book.description,
  tempImageFileName: book.id ? undefined : book.imageUrl,
  imageAltText: book.imageAltText,
});

export const mapBookFromApiToVm = (book: Book): BookVm => ({
  id: book.id.toString(),
  title: book.title,
  authors: book.authors.map(author => ({
    id: author.id.toString(),
    name: `${author.firstName} ${author.lastName}`,
  })),
  description: book.description,
  imageUrl: book.imageUrl,
  imageAltText: book.imageAltText,
});
