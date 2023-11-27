import axios from 'axios';
import { Author } from './edit-author-list.model';

export const getAuthorList = async (): Promise<Author[]> => {
  // const apiURL = `${import.meta.env.VITE_BASE_API_URL}`;
  const apiURL = `https://localhost:7223/api`;
  const response = await axios.get(`${apiURL}/Authors?page=1&pageSize=10`);
  return response.data.results;
};
