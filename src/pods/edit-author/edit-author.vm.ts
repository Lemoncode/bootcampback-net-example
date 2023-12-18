export interface AuthorVm {
  id?: number;
  firstName: string;
  lastName: string;
}

export const createEmptyAuthor = (): AuthorVm => ({
  id: undefined,
  firstName: '',
  lastName: '',
});

export interface ValidateAuthorFields {
  firstName: string;
  lastName: string;
}

export const createEmptyError = (): ValidateAuthorFields => ({
  firstName: '',
  lastName: '',
});
