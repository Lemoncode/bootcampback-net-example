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

interface AuthorList {
  id: number;
  firstName: string;
  lastName: string;
  bookCount: number;
}

export interface RequestEditAuthorList {
  results: AuthorList[];
  paginationInfo: PaginationInfo;
}
