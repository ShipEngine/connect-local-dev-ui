import { useQuery } from 'react-query';
import axios from 'axios';
import { CarrierApp } from '@shipengine/connect-sdk/lib/internal/carriers';

interface UseApp {
  isLoading: boolean;
  isError: boolean;
  app?: CarrierApp;
  error?: unknown;
}

export default function useApp(): UseApp {
  const {
    // status,
    // isIdle,
    isLoading,
    // isSuccess,
    isError,
    data,
    error,
    // isStale,
    // isFetching,
    // failureCount,
    // refetch,
    // clear,
  } = useQuery<CarrierApp>(
    'app',
    async () => {
      const { data } = await axios.get('http://localhost:3000');
      return data;
    },
    {
      // Refetch the data every second
      refetchInterval: 100,
    },
  );

  // const tempIsError = isError || failureCount !== 0;

  return { isLoading, isError, app: data, error };
}
