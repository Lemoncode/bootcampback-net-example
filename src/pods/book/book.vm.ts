interface Review {
  reviewer: string;
  title: string;
  text: string;
}

export interface BookVm {
  title: string;
  description: string;
  image: string;
  authors: string[];
  reviews: Review[];
}

export const createEmptyBook = (): BookVm => ({
  title: '',
  description: '',
  image: '',
  authors: [],
  reviews: [],
});
