import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthorVm, createEmptyAuthor } from './edit-author.vm';
import { useNotificationContext } from '@/core/notification';
import { EditAuthor } from './edit-author.component';
import { mapAuthorFromApiToVm, mapAuthorFromVmToApi } from './edit-author.mappers';
import { getAuthor, saveAuthor } from './api';

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
    saveAuthor(apiAuthor)
      .then(() => notify('Autor guardado'))
      .then(() => navigate(-1))
      .catch(() => notify('Ha ocurrido un error al guardar el autor'));
  };

  React.useEffect(() => {
    if (id) {
      getAuthor(id)
        .then(author => {
          setAuthor(mapAuthorFromApiToVm(author));
        })
        .catch(() => notify('Ha ocurrido un error al cargar el autor'));
    }
  }, [id]);

  return <EditAuthor author={author} onSave={handleSave} />;
};
