export interface Review {
  id?: string;
  bookId: string;
  reviewer: string;
  reviewText: string;
  creationDate: string;
  stars: number;
}

export const createEmptyReview = (): Review => ({
  id: undefined,
  bookId: '',
  reviewer: 'Usuario Anónimo',
  reviewText: '',
  creationDate: undefined,
  stars: 0,
});

export interface BookVm {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAltText: string;
  authors: {
    id: string;
    firstName: string;
    lastName: string;
  }[];
  reviews?: Review[];
}

export const createEmptyBook = (): BookVm => ({
  id: '',
  title: '',
  description: '',
  imageUrl: '',
  imageAltText: '',
  authors: [],
  reviews: [],
});
