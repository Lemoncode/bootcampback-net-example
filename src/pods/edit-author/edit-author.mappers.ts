import { AuthorVm, createEmptyAuthor } from './edit-author.vm';
import { Author } from './api';

export const mapAuthorFromVmToApi = (author: AuthorVm): Author => ({
  id: author.id,
  firstName: author.firstName,
  lastName: author.lastName,
});

export const mapAuthorFromApiToVm = (author: Author): AuthorVm =>
  Boolean(author)
    ? {
        id: author.id,
        firstName: author.firstName,
        lastName: author.lastName,
      }
    : createEmptyAuthor();
