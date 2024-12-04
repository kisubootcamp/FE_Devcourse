import axios from 'axios';
import { useEffect, useState } from 'react';

export default function FetchAxios() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setData(data);
      setLoading(false);
    } catch {
      setIsError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (isError) {
    return <h1>Error!</h1>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
