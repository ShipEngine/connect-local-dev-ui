import useApi from './use-api';
import { CarrierApp } from '@shipengine/integration-platform-sdk';

interface UseApp {
  app: CarrierApp | undefined;
  error: Error | undefined;
  isValidating: boolean;
}

export default function useApp(): UseApp {
  const { data, error, isValidating } = useApi<CarrierApp>(
    {
      url: 'http://localhost:3001/',
    },
    { refreshInterval: 10 },
  );

  console.log(data);

  return {
    app: data,
    error,
    isValidating,
  };
}
