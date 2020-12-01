import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRequest} from './RequestHandler';

interface AuthenticationEntry {
  login: string;
  password: string;
}

const KEY_TOKEN = 'token';

const useAuthenticationHandler = () => {
  const [token, setToken] = useState<string | null>(null);

  const {data, error, isLoading, handleRequest} = useRequest();

  useEffect(() => {
    AsyncStorage.getItem(KEY_TOKEN)
      .then(setToken)
      .catch(() => console.error('Failed to get token from local storage'));
  }, []);

  useEffect(() => {
    setToken(data?.access_token);
    if (data?.access_token) {
      AsyncStorage.setItem(KEY_TOKEN, data?.access_token);
    }
  }, [data]);

  const handleAuthentication = (authenticationEntry: AuthenticationEntry) => {
    handleRequest({method: 'post', url: '/login', data: authenticationEntry});
  };

  const handleDisconnection = () => {
    setToken(null);
    AsyncStorage.removeItem(KEY_TOKEN);
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
