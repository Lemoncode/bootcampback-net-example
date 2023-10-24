interface Review {
  id: string;
  reviewer: string;
  title: string;
  text: string;
}

export interface Book {
  id: string;
  title: string;
  description: string;
  image: string;
  authors: string[];
  reviews: Review[];
}
