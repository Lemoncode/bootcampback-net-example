import { Author, Book } from '@/core/mocks';
import { Lookup } from '@/common/models';
import { BookVm } from './add-book.vm';

export const mapActhorFromApiToVm = (actor: Author): Lookup => ({
  id: actor.id.toString(),
  name: `${actor.firstName} ${actor.lastName}`,
});

export const mapActhorListFromApiToVm = (actorList: Author[]): Lookup[] =>
  Boolean(actorList) ? actorList.map(mapActhorFromApiToVm) : [];

export const mapBookFromVmToApi = (book: BookVm): Book => ({
  title: book.title,
  authors: book.authors.map(author => Number(author.id)),
  description: book.description,
  imageUrl: book.imageUrl,
  imageAltText: book.imageAltText,
});
