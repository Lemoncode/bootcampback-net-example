import { Validators, createFormValidation } from '@lemoncode/fonk';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';

const validationSchema = {
  field: {
    title: [{ validator: Validators.required, message: 'Campo requerido' }],
    authors: [
      { validator: Validators.required, message: 'Campo requerido' },
      {
        validator: arrayRequired.validator,
        customArgs: { minLength: 1 },
        message: 'Al menos tiene que añadir un autor',
      },
    ],
    description: [{ validator: Validators.required, message: 'Campo requerido' }],
    imageUrl: [{ validator: Validators.required, message: 'Campo requerido' }],
    imageAltText: [{ validator: Validators.required, message: 'Campo requerido' }],
  },
};

export const formValidation = createFormValidation(validationSchema);
