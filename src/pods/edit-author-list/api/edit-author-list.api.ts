import axios from 'axios';
import { RequestEditAuthorList } from './edit-author-list.model';

const baseUrl = '/api/authors';

export const getEditAuthorList = async (page: number, pageSize: number): Promise<RequestEditAuthorList> => {
  const { data } = await axios.get<RequestEditAuthorList>(`${baseUrl}?page=${page}&pageSize=${pageSize}`);
  return data;
};
