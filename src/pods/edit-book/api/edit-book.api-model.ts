export interface Book {
  id?: string;
  title: string;
  authors: {
    id: string;
    firstName: string;
    lastName: string;
  }[];
  description: string;
  imageUrl: string;
  imageAltText: string;
}

export interface SaveBook {
  id?: number;
  title: string;
  authorIds: number[];
  description: string;
  tempImageFileName: string;
  imageAltText: string;
}

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  bookCount: number;
}

interface PaginationInfo {
  currentPage: number;
  resultsPerPage: number;
  totalPages: number;
  totalRows: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  resultsFrom: number;
  resultsTo: number;
}

export interface EditAuthorListResponse {
  results: Author[];
  paginationInfo: PaginationInfo;
}

export interface EditAuthorListParams {
  page: number;
  pageSize: number;
}
