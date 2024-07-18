import { AxiosError } from 'axios';

export const handleAxiosError = (error: unknown): string => {
  if (error instanceof AxiosError) {
    console.error(error.response?.data);
    return error.response?.data.message || 'An error occurred';
  }
  return 'An error occurred';
};
