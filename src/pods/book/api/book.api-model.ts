export interface Review {
  id?: number;
  bookId: number;
  reviewer: string;
  reviewText: string;
  creationDate: string;
  stars: number;
}
export interface ReviewParams {
  results: Review[];
  paginationInfo: {
    currentPage: number;
    resultsPerPage: number;
    totalPages: number;
    totalRows: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    resulsFrom: number;
    resultsTo: number;
  };
}

export interface Book {
  id?: number;
  title: string;
  imageUrl: string;
  imageAltText: string;
  description: string;
  authors: {
    id: number;
    firstName: string;
    lastName: string;
  }[];
}
