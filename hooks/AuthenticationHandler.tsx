import {useEffect, useState} from 'react';
import useRequest from './RequestHandler';

interface AuthenticationEntry {
  login: string;
  password: string;
}

const useAuthenticationHandler = () => {
  const [token, setToken] = useState<string | null>(null);

  const {data, error, isLoading, handleRequest} = useRequest();

  useEffect(() => {
    setToken(data?.access_token);
  }, [data]);

  const handleAuthentication = (authenticationEntry: AuthenticationEntry) => {
    handleRequest({method: 'post', url: '/login', data: authenticationEntry});
  };

  const handleDisconnection = () => {
    setToken(null);
  };

  return {
    token,
    error,
    isLoading,
    handleAuthentication,
    handleDisconnection,
  };
};

export default useAuthenticationHandler;
