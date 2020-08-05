import useSWR, { ConfigInterface, responseInterface } from 'swr';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export type GetRequest = AxiosRequestConfig | null;

interface Return<Data, Error>
  extends Pick<
    responseInterface<AxiosResponse<Data>, AxiosError<Error>>,
    'isValidating' | 'revalidate' | 'error' | 'mutate'
  > {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
}

export type Config<Data = unknown, Error = unknown> = Omit<
  ConfigInterface<AxiosResponse<Data>, AxiosError<Error>>,
  'initialData'
>;

export default function useRequest<Data = unknown, Error = unknown>(
  request: GetRequest,
  config: Config<Data, Error> = {},
): Return<Data, Error> {
  const { data: response, error, isValidating, revalidate, mutate } = useSWR<
    AxiosResponse<Data>,
    AxiosError<Error>
  >(
    request && JSON.stringify(request),
    /**
     * NOTE: Typescript thinks `request` can be `null` here, but the fetcher
     * function is actually only called by `useSWR` when it isn't.
     */
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    () => axios(request!),
    config,
  );

  return {
    data: response && response.data,
    response,
    error,
    isValidating,
    revalidate,
    mutate,
  };
}
