import {useState} from 'react';
import axios from 'axios';

const useRequestHandler = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleRequest = (request: string) => {
    setLoading(true);
    setError(null);
    setData(null);

    return axios
      .get(request)
      .then(({data: result}) => setData(result))
      .catch((err) => setError(err.response.status))
      .finally(() => setLoading(false));
  };

  return {isLoading, error, data, handleRequest};
};

export default useRequestHandler;
