import axios from "axios";
import { useEffect, useState } from "react";

export default function FetchAxios() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      //axios에는  get, post, delete, put, patch 메서드 가짐
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setUser(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  if (loading) <h1>Loading...</h1>;

  if (error) <h1>Error...</h1>;

  return <div>{JSON.stringify(user, null, 2)}</div>;
}
