import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { switchRoutes } from '@/core/router';
import { AuthorVm, createEmptyAuthor } from './edit-author.vm';
import { EditAuthor } from './edit-author.component';
import { mapAuthorFromApiToVm, mapAuthorFromVmToApi } from './edit-author.mappers';
import { getAuthor, saveAuthor } from './api';

interface Props {
  isEditingMode?: boolean;
}

export const EditAuthorContainer: React.FC<Props> = props => {
  const { isEditingMode } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = React.useState<AuthorVm>(createEmptyAuthor());

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
      saveAuthor(mapAuthorFromVmToApi(newAuthor));
      navigate(switchRoutes.editAuthorList);
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {
    if (id && isEditingMode) {
      loadAuthor();
    }
  }, []);

  return <EditAuthor onSubmit={handleSubmit} isEditMode={isEditingMode} author={author} setAuthor={setAuthor} />;
};
