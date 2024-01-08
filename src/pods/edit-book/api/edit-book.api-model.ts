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
