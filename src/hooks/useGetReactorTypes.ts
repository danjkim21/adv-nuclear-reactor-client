import { useEffect, useState } from 'react';

export default function useGetAllReactorTypes() {
  let [data, setData] = useState<ReactorInterface[]>([]);
  let [isLoading, setIsLoading] = useState(false);
  let [isError, setIsError] = useState(false);
  let [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://ardb.cyclic.app/api/categories`);

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
