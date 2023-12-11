interface Review {
  reviewer: string;
  title: string;
  text: string;
}

export interface BookVm {
  title: string;
  description: string;
  imageUrl: string;
  authors: string[];
  reviews: Review[];
}

export const createEmptyBook = (): BookVm => ({
  title: '',
  description: '',
  imageUrl: '',
  authors: [],
  reviews: [],
});
