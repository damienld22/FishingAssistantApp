import {useState} from 'react';
import axios, {AxiosRequestConfig} from 'axios';
import {BASE_URL} from '../utils';

const useRequestHandler = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleRequest = ({
    url,
    method,
    token,
  }: {
    url: AxiosRequestConfig['url'];
    method: AxiosRequestConfig['method'];
    token?: string;
  }) => {
    setLoading(true);
    setError(null);
    setData(null);

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
      headers:
        method?.toLowerCase() === 'post'
          ? {Authorization: `Bearer ${token}`}
          : {},
    })
      .then(({data: result}) => setData(result))
      .catch((err) => setError(err.response.status))
      .finally(() => setLoading(false));
  };

  return {isLoading, error, data, handleRequest};
};

function requestNeedTokenAuthorization(token?: string) {
  return !!token;
}

function needApplicationJsonContentType(method?: AxiosRequestConfig['method']) {
  return method && ['post', 'put', 'patch'].includes(method?.toLowerCase());
}

export default useRequestHandler;
