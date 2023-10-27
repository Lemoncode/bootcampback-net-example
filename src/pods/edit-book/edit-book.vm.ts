export interface BookVm {
  id: string;
  title: string;
  authors: string[];
  description: string;
  imageUrl: string;
}

export const createEmptyBook = (): BookVm => ({
  id: '',
  title: '',
  authors: [],
  description: '',
  imageUrl: '',
});
