export interface Book {
  id: string;
  title: string;
  authors: {
    id: string;
    firstName: string;
    lastName: string;
  }[];
}
