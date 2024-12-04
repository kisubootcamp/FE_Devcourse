import axios from "axios";
import { useEffect, useState } from "react";

export default function FetchAxios() {
  const [data, setData] = useState<UserType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setData(data);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>error</h1>;
  return (
    <div>
      <h1>FetchAxios</h1>
      {data?.map((v) => (
        <div key={v.id}>{v.name}</div>
      ))}
    </div>
  );
}
