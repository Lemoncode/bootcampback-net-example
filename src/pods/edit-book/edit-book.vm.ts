import { ValidationResult } from '@lemoncode/fonk';
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

export const createEmptyValidationResult = (): ValidationResult => ({
  succeeded: true,
  type: '',
  message: '',
});

export interface BookFieldsErrors {
  title: ValidationResult;
  authors: ValidationResult;
  description: ValidationResult;
  imageUrl: ValidationResult;
  imageAltText: ValidationResult;
}

export const createEmptyFieldsErrors = (): BookFieldsErrors => ({
  title: createEmptyValidationResult(),
  authors: createEmptyValidationResult(),
  description: createEmptyValidationResult(),
  imageUrl: createEmptyValidationResult(),
  imageAltText: createEmptyValidationResult(),
});
