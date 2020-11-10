import useRequest from './RequestHandler';

interface AuthenticationEntry {
  login: string;
  password: string;
}

const useAuthenticationHandler = () => {
  const {data, error, isLoading, handleRequest} = useRequest();

  const handleAuthentication = (authenticationEntry: AuthenticationEntry) => {
    handleRequest({method: 'post', url: '/login', data: authenticationEntry});
  };

  return {
    token: data?.access_token,
    error,
    isLoading,
    handleAuthentication,
  };
};

export default useAuthenticationHandler;
