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

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  bookCount: number;
}

export interface EditAuthorListResponse {
  results: Author[];
  paginationInfo: PaginationInfo;
}

export interface EditAuthorListParams {
  page: number;
  pageSize: number;
}
