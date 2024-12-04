import { useEffect, useState } from "react";
import axios from "axios";

const FetchAxios = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log("response", response.data);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occured.</p>;
  }

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default FetchAxios;
