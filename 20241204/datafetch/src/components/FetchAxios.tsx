import axios from "axios";
import { useEffect, useState } from "react";

export default function FetchAxios() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(data);
      setLoading(false);
    } catch {
      setLoading(true);
      setIsError(false);
    }
  };
  if (loading) {
    return <h1>Loading..</h1>;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {/* 웹브라우저에 api가 보여지게 하고 싶을 때 */}
      <pre>{JSON.stringify(data, null, 2)}</pre>{" "}
      {/*클라이언트 기반에서 통신하기 때문에 null이 보임 데이터가 보이려면 웹브라우저에 화면부터 렌더링이 되어야함, 로딩되는 찰나의 간극을 막을 수는 없음 그래서 ssr을 쓰는 것임 응답이 모두 끝난다음에 넝어오는 것이기에 간극이 없음*/}
    </div>
  );
}
