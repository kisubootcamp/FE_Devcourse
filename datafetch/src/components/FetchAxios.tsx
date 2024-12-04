import axios from "axios";
import { useEffect, useState } from "react";

export default function FetchAxios() {
  const [user, setUser] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      console.log(data);
      setUser(data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return <h1>Error</h1>;
  }

  if (loading) {
    return <h1>Loading</h1>;
  }

  return <div>axios</div>;
}
