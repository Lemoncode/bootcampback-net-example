import { ValidationResult } from '@lemoncode/fonk';

export interface Credentials {
  email: string;
  password: string;
}

export const createEmptyCredentials = (): Credentials => ({
  email: '',
  password: '',
});

const createEmptyValidationResult = (): ValidationResult => ({
  succeeded: true,
  type: '',
  message: '',
});

export interface CredentialsErrors {
  email: ValidationResult;
  password: ValidationResult;
}

export const createEmptyCredentialsError = (): CredentialsErrors => ({
  email: createEmptyValidationResult(),
  password: createEmptyValidationResult(),
});
