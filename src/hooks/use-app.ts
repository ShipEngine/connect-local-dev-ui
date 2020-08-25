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
  const { isLoading, isError, data, error } = useQuery<CarrierApp>(
    'app',
    async () => {
      const { data } = await axios.get('http://localhost:3000/');
      console.log('refetch');

      return data;
    },
    {
      // Refetch the data every second
      refetchInterval: 100,
    },
  );

  return { isLoading, isError, app: data, error };
}
