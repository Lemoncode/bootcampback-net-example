import axios from 'axios';
import { EditAuthorListParams, EditAuthorListResponse } from './edit-author-list.model';

const baseUrl = '/api/authors';

export const getEditAuthorList = async ({ page, pageSize }: EditAuthorListParams): Promise<EditAuthorListResponse> => {
  const { data } = await axios.get<EditAuthorListResponse>(`${baseUrl}?page=${page}&pageSize=${pageSize}`);
  return data;
};
