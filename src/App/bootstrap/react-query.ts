import { QueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry(failureCount, error) {
        console.error(error);
        if (isAxiosError(error)) {
          if (error.response?.status === 401) return false;
          if (error.response?.status === 403) return false;
          if (error.response?.status === 404) return false;
        }

        // retry 3 times
        return failureCount <= 3;
      },
    },
  },
});
