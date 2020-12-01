import {useState} from 'react';
import axios, {AxiosRequestConfig} from 'axios';
import {BASE_URL} from '../utils';

const useRequest = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<number | null>(null);
  const [result, setResult] = useState<any>(null);

  const handleRequest = ({
    url,
    method,
    data,
    token,
  }: {
    url: AxiosRequestConfig['url'];
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    token?: string | null;
  }) => {
    setLoading(true);
    setError(null);
    setResult(null);

    const headers = {} as AxiosRequestConfig['headers'];

    if (requestNeedTokenAuthorization(token)) {
      headers.Authorization = `Bearer ${token}`;
    }

    if (needApplicationJsonContentType(method)) {
      headers['Content-Type'] = 'application/json';
    }

    return axios({
      baseURL: BASE_URL,
      method,
      url,
      data,
      headers,
    })
      .then(({data: resultReq}) => setResult(resultReq))
      .catch((err) => setError(err.response.status))
      .finally(() => setLoading(false));
  };

  return {isLoading, error, data: result, handleRequest};
};

function requestNeedTokenAuthorization(token?: string | null) {
  return !!token;
}

function needApplicationJsonContentType(method?: AxiosRequestConfig['method']) {
  return method && ['post', 'put', 'patch'].includes(method?.toLowerCase());
}

export {useRequest};
