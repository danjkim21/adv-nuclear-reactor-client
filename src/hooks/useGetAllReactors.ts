import { useEffect, useState } from 'react';
import { ReactorInterface } from '../types/reactors';

export default function useGetAllReactors() {
  const [data, setData] = useState<ReactorInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://ardb.cyclic.app/api`);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const json = await response.json();
      setData(json);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);

      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return { data, isLoading, isError, error };
}
