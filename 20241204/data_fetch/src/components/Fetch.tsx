import { useEffect, useState } from "react";

export default function Fetch() {
  const [user, setUser] = useState([]);
  //  로딩 상태를 만들어 API를  받아오기까지의 간극을 자연스럽게 처리한다.(막을수는 없음) - CSR의 특징
  // 네이버 바이브, 아하 사이트같이 CSR을 기반으로한 렌더링을 한 경우 API를 불러오는 동안 찰나의 간격을 UI로 처리해주었다.
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  //  useEffect의 콜백함수에는 async 적용 x
  const getData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const data = await response.json();
      setUser(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  useEffect(() => {
    // Promise then, catch
    // fetch(`https://jsonplaceholder.typicode.com/users`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setUser(data),
    // setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     setError(true);
    //   });

    getData();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error...</h1>;

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
