import axios from "axios";
import { useEffect, useState } from "react";

export default function Axios() {
  const [user, setUser] = useState(null);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setUser(() => data);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
