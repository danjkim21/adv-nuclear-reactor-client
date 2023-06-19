import { useEffect, useState } from 'react';

export default function useGetAllReactorsByType(type) {
  let [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [isError, setIsError] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [type]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://ardb.cyclic.app/api/categories/${type}`
      );
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  };

  return { data, isLoading, isError, error };
}
