interface Review {
  reviewer: string;
  title: string;
  text: string;
}

export interface BookVm {
  title: string;
  description: string;
  imageUrl: string;
  imageAltText: string;
  authors: {
    id: string;
    firstName: string;
    lastName: string;
  }[];
  reviews: Review[];
}

export const createEmptyBook = (): BookVm => ({
  title: '',
  description: '',
  imageUrl: '',
  imageAltText: '',
  authors: [],
  reviews: [],
});
