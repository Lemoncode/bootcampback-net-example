import axios, { InternalAxiosRequestConfig } from 'axios';
import { trackPromise } from 'react-promise-tracker';

const axiosInstance = axios.create();
const DEFAULT_AREA = 'DEFAULT_AREA';

export const requestInterceptor = (value: InternalAxiosRequestConfig): InternalAxiosRequestConfig => ({
  ...value,
  adapter: () => trackPromise(axiosInstance.request(value), DEFAULT_AREA),
});

export const requestFailedInterceptor = (error: any) => Promise.reject(error);

export const useApiConfiguration = () => {
  return () => {
    axiosInstance.interceptors.request.use(requestInterceptor, requestFailedInterceptor);
  };
};

declare module 'axios' {
  export interface AxiosRequestConfig {
    area?: string;
  }
}
