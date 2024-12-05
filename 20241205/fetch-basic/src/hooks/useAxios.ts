import { useEffect, useState } from 'react';
import axios from 'axios';

interface FetchResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

const useAxios = <T>(url: string): FetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(url);
        const result: T = await data;
        setData(result);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useAxios;
