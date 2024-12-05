import { useEffect, useState } from "react";

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

  //컴포넌트 생성 시점 api 통신
  //✅ 1. fetch
  useEffect(() => {
    getData();
    //promise then
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setUser(data);
    //     //데이터 통신이 끝나면 화면을 보여줌
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     setIsError(true);
    //   });
  }, []);

  //로딩 중일 때 로딩화면을 보여준다
  if (loading) {
    return <h1>Loading..</h1>;
  }

  if (isError) {
    return <h1>Error..</h1>;
  }

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
