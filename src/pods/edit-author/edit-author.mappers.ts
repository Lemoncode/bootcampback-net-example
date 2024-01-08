import * as apiModel from './api';
import * as vm from './edit-author.vm';

export const mapAuthorFromVmToApi = (author: vm.AuthorVm): apiModel.Author => ({
  id: Boolean(author.id) ? author.id : undefined,
  firstName: author.firstName,
  lastName: author.lastName,
});

export const mapAuthorFromApiToVm = (author: apiModel.Author): vm.AuthorVm =>
  Boolean(author)
    ? {
        id: author.id,
        firstName: author.firstName,
        lastName: author.lastName,
      }
    : vm.createEmptyAuthor();
