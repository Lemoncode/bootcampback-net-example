import { Book as apiModel } from '@/core/mocks';
import { BookVm } from './book.vm';

export const mapBookFromApiToVm = (book: apiModel): BookVm => ({
  ...book,
});
