import { ValidationResult } from '@lemoncode/fonk';
export interface AuthorVm {
  id?: number;
  firstName: string;
  lastName: string;
}

export const createEmptyAuthor = (): AuthorVm => ({
  id: undefined,
  firstName: '',
  lastName: '',
});

const createEmptyValidationResult = (): ValidationResult => ({
  succeeded: true,
  type: '',
  message: '',
});

export interface AuthorsFieldsErrors {
  firstName: ValidationResult;
  lastName: ValidationResult;
}

export const createEmptyFieldsErrors = (): AuthorsFieldsErrors => ({
  firstName: createEmptyValidationResult(),
  lastName: createEmptyValidationResult(),
});
