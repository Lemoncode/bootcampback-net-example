import axios from 'axios';
import { Author } from './edit-author-list.model';

export const getAuthorList = async (page: number, pageSize: number): Promise<Author[]> => {
  // const apiURL = `${import.meta.env.VITE_BASE_API_URL}`;
  const apiURL = `https://localhost:7223/api`;
  const response = await axios.get(`${apiURL}/Authors?page=${page}&pageSize=${pageSize}`);
  return response.data.results;
};
