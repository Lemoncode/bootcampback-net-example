import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useNotificationContext } from '@/core/notification';
import { switchRoutes } from '@/core/router';
import { AuthorVm, createEmptyAuthor, createEmptyError, ValidateAuthorFields } from './edit-author.vm';
import { EditAuthor } from './edit-author.component';
import { mapAuthorFromApiToVm, mapAuthorFromVmToApi } from './edit-author.mappers';
import { getAuthor, saveAuthor } from './api';
import { formValidation } from './edit-author.validations';

interface Props {
  isEditingMode?: boolean;
}

export const EditAuthorContainer: React.FC<Props> = props => {
  const { isEditingMode } = props;
  const { id } = useParams();
  const { notify } = useNotificationContext();
  const navigate = useNavigate();
  const [author, setAuthor] = React.useState<AuthorVm>(createEmptyAuthor());
  const [errors, setErrors] = React.useState<ValidateAuthorFields>(createEmptyError());

  const loadAuthor = async () => {
    try {
      const author = await getAuthor(id);
      setAuthor(mapAuthorFromApiToVm(author));
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = (newAuthor: AuthorVm) => {
    try {
      formValidation.validateForm(newAuthor).then(formValidationResult => {
        if (formValidationResult.succeeded) {
          saveAuthor(mapAuthorFromVmToApi(newAuthor));
          notify('Autor guardado correctamente', 'success');
          navigate(switchRoutes.editAuthorList);
        } else {
          const newErrors = { ...errors };
          Object.keys(formValidationResult.fieldErrors).forEach(field => {
            newErrors[field] = formValidationResult.fieldErrors[field].message;
          });
          setErrors(newErrors);
        }
      });
    } catch (error) {
      notify('Error al guardar el autor', 'error');
    }
  };

  React.useEffect(() => {
    if (id && isEditingMode) {
      loadAuthor();
    }
  }, []);

  return (
    <EditAuthor
      author={author}
      errors={errors}
      isEditingMode={isEditingMode}
      onSubmit={handleSubmit}
      setAuthor={setAuthor}
      onErrors={setErrors}
    />
  );
};
