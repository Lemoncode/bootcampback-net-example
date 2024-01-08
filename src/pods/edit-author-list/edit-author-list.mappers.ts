import * as apiModel from './api';
import * as vm from './edit-author-list.vm';

const mapAuthorFromApiToVm = (author: apiModel.Author): vm.Author => ({
  id: author.id,
  firstName: author.firstName,
  lastName: author.lastName,
  bookCount: author.bookCount,
});

export const mapAuthorListFromApiToVm = (authorList: apiModel.Author[]): vm.Author[] =>
  Array.isArray(authorList) ? authorList.map(author => mapAuthorFromApiToVm(author)) : [];
