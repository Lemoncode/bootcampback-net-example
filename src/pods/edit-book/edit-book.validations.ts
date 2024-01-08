import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    title: [{ validator: Validators.required, message: 'Campo requerido' }],
    authors: [{ validator: Validators.required, message: 'Campo requerido' }],
    description: [{ validator: Validators.required, message: 'Campo requerido' }],
    imageUrl: [{ validator: Validators.required, message: 'Campo requerido' }],
    imageAltText: [{ validator: Validators.required, message: 'Campo requerido' }],
  },
};

export const formValidation = createFormValidation(validationSchema);
