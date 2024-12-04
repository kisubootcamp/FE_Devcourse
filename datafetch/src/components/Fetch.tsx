import { useEffect, useState } from "react";

export default function Fetch() {
  const [user, setUser] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUser(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setUser(data);
    //     setLoading(false);
    //   })
    //   .catch(() => setError(true));

    getData();
  }, []);

  useEffect(() => {
    console.log("user :", user);
  }, [user]);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }
  return <div>ss</div>;
}
