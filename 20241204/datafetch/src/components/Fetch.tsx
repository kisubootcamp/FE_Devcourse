import { useEffect, useState } from "react";

// 컴포넌트가 마운트(렌더링) 된 후에 api를 불러와야 정상적으로 불러올 수 있음
export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // useEffect는 async를 적용할 수 없음
  // 따라서 따로 함수를 빼서 정의하고 useEffect 안에서 사용
  // 이 방법이 가독성 측면에서 더 좋기 때문에 이 방법을 더 많이 사용
  const getDate = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    } catch {
      setLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    // promise then
    getDate();
    // fetch(`https://jsonplaceholder.typicode.com/users`)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setUser(data);
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     setIsError(true);
    //   });
  }, []);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (isError) {
    return <h1>Error!</h1>;
  }

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}
