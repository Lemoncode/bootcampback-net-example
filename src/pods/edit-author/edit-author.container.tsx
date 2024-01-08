import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthorVm, createEmptyAuthor } from './edit-author.vm';
import { useNotificationContext } from '@/core/notification';
import { EditAuthor } from './edit-author.component';
import { mapAuthorFromApiToVm, mapAuthorFromVmToApi } from './edit-author.mappers';
import * as api from './api';

interface Props {
  id: string;
}

export const EditAuthorContainer: React.FC<Props> = props => {
  const { id } = props;
  const navigate = useNavigate();
  const { notify } = useNotificationContext();
  const [author, setAuthor] = React.useState<AuthorVm>(createEmptyAuthor);

  const handleSave = (author: AuthorVm) => {
    const apiAuthor = mapAuthorFromVmToApi(author);
    api
      .saveAuthor(apiAuthor)
      .then(() => notify('Autor guardado correctamente', 'success'))
      .then(() => navigate(-1))
      .catch(() => notify('Ha ocurrido un error al guardar el autor', 'error'));
  };

  React.useEffect(() => {
    if (id) {
      api
        .getAuthor(id)
        .then(author => {
          setAuthor(mapAuthorFromApiToVm(author));
        })
        .catch(() => notify('Ha ocurrido un error al cargar el autor', 'error'));
    }
  }, [id]);

  return <EditAuthor author={author} onSave={handleSave} />;
};
