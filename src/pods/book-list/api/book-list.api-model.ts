interface Review {
  id: string;
  reviewer: string;
  title: string;
  text: string;
}

export interface Book {
  id?: number;
  title: string;
  imageUrl: string;
  imageAltText: string;
  description: string;
  authors: number[];
  reviews?: Review[];
}
