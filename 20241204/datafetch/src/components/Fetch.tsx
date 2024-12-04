import { useEffect, useState } from "react";

export default function Fetch() {
  // 데이터를 화면에 뿌려주려면 local 상태를 만들어야 함
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

  // 데이터 가져옴
  useEffect(() => {
    getData();
    // promise then
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setUser(data);
    //     setLoading(false);
    //   })
    //   .catch(() => setIsError(true));
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
