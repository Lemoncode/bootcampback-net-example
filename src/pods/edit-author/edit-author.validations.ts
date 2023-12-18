import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    firstName: [{ validator: Validators.required, message: 'Campo requerido' }],
    lastName: [{ validator: Validators.required, message: 'Campo requerido' }],
  },
};

export const formValidation = createFormValidation(validationSchema);
