import { useEffect, useState } from "react";

export default function Fetch() {
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const json = await (
        await fetch(`https://jsonplaceholder.typicode.com/users`)
      ).json();
      setUser(() => json);
    } catch (error) {
      setIsError(() => true);
    }
    setLoading(() => false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {loading ? (
        <div>로딩중...</div>
      ) : (
        <div>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
    </>
  );
}
