import { useState, useEffect } from 'react';

type ApiFunction = (...args: any[]) => Promise<any>;

function useApiFetch(apiFunction: ApiFunction, ...args: any[]) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<any>(null);
  const [responseData, setResponseData] = useState<any>(null);

  const fetchData = async (...funcArgs: any[]) => {
    setIsLoading(true);
    try {
      const response = await apiFunction(...funcArgs);
      setResponseData(response);
      setError(null);
      setIsLoaded(true)
    } catch (error) {
      setError(error);
      setResponseData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isLoaded, error, responseData, fetchData };
}

export default useApiFetch;
