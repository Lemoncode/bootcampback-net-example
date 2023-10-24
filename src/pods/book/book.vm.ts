interface Review {
  reviewer: string;
  title: string;
  text: string;
}

export interface Book {
  title: string;
  description: string;
  image: string;
  authors: string[];
  reviews: Review[];
}

export const createEmptyBook = (): Book => ({
  title: '',
  description: '',
  image: '',
  authors: [],
  reviews: [],
});
