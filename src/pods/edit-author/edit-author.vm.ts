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
