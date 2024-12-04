import React, { useState, useEffect } from "react";

export default function Fetch() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUser(data);
      setLoading(false);
    } catch {
      setLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getData();
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setUser(data);
    //     setLoading(false);
    //     console.log(data);
    //   })
    //   .catch(() => {
    //     setIsError(true);
    //   });
  }, []);

  if (loading) {
    return <h1>Loading..</h1>;
  }
  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}
