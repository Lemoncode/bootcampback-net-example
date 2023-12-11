import { Lookup } from '@/common/models';

export interface BookVm {
  title: string;
  authors: Lookup[];
  description: string;
  imageUrl: string;
  imageAltText: string;
}

export const createEmptyBook = (): BookVm => ({
  title: '',
  authors: [],
  description: '',
  imageUrl: '',
  imageAltText: '',
});
