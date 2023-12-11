export interface BookVm {
  id: string;
  title: string;
  authors: number[];
  description: string;
  imageUrl: string;
  imageAltText: string;
}

export const createEmptyBook = (): BookVm => ({
  id: '',
  title: '',
  authors: [],
  description: '',
  imageUrl: '',
  imageAltText: '',
});
