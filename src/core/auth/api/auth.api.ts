import axios from 'axios';

export const whoami = () => axios.get('/api/users/me').then(({ data }) => data);

export const logout = () => axios.post('/api/externalLogin/logout');