import { Lookup } from '@/common/models';

export interface BookVm {
  id?: string;
  title: string;
  authors: Lookup[];
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
