interface Review {
  id: string;
  reviewer: string;
  title: string;
  text: string;
}

export interface Book {
  id: string;
  title: string;
  image: string;
  description: string;
  authors: string[];
  reviews: Review[];
}
