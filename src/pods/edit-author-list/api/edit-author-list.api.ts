import axios from 'axios';
import { EditAuthorListParams, EditAuthorListResponse } from './edit-author-list.model';

export const getEditAuthorList = async ({ page, pageSize }: EditAuthorListParams): Promise<EditAuthorListResponse> => {
  const baseUrl = '/api/authors';
  const { data } = await axios.get<EditAuthorListResponse>(`${baseUrl}?page=${page}&pageSize=${pageSize}`);
  return data;
};

export const deleteAuthor = async (id: string): Promise<void> => {
  const baseUrl = '/api/authors';
  await axios.delete(`${baseUrl}/${id}`);
};
