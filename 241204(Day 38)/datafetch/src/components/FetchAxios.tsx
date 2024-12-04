import axios from "axios";
import { useEffect, useState } from "react";

// axios
export default function FetchAxios() {
  // 화면에 뿌려주고 싶으면 로컬상태를 하나 만들어야 됨
  const [data, setData] = useState(null);
  // 새로고침 시 잠시 나오는 화면에 loading이라 표시하고 싶을 때
  const [isloading, setIsLoading] = useState(true);
  // 에러 시 표현할 문구
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    // get을 원하면 get을 넣어주면 된다
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(data);
      setIsLoading(false);
    } catch {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isloading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
