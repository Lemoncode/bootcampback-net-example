import { useState } from 'react';
import { FormValidationResult } from '@lemoncode/fonk';

export const useValidationErrors = <T>(initialErrors: T) => {
  const [errors, setErrors] = useState(initialErrors);

  const handleErrors = (formValidationResult: FormValidationResult) => {
    const newErrors = { ...errors };
    Object.keys(formValidationResult.recordErrors).forEach(field => {
      newErrors[field] = formValidationResult.recordErrors[field];
    });
    setErrors(newErrors);
  };

  return { errors, onErrors: handleErrors };
};
