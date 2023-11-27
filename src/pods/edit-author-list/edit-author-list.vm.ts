export interface Author {
  id: string;
  firstName: string;
  lastName: string;
  bookCount: number;
}

export const createEmptyAuthor = (): Author => ({
  id: '',
  firstName: '',
  lastName: '',
  bookCount: 0,
});
