// import { useEffect, useState } from "react";

// export default function Fetch() {
//   // 화면에 뿌려주고 싶으면 로컬상태를 하나 만들어야 됨
//   const [user, setUser] = useState(null);
//   // 새로고침 시 잠시 나오는 화면에 loading이라 표시하고 싶을 때
//   const [loading, setLoading] = useState(true);
//   // 에러 시 표현할 문구
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     // promise then
//     // 원하는 주소를 입력
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setUser(data);
//         setLoading(false);
//       })
//       // 에러는 catch에서 처리
//       .catch(() => {
//         setIsError(true);
//       });
//   }, []);

//   if (loading) {
//     return <h1>Loading...</h1>;
//   }
//   if (isError) {
//     return <h1>Error...</h1>;
//   }

//   return (
//     <div>
//       <pre>{JSON.stringify(user, null, 2)}</pre>
//     </div>
//   );
// }

/* async await를 사용하고 싶다면 */
import { useEffect, useState } from "react";

export default function Fetch() {
  // 화면에 뿌려주고 싶으면 로컬상태를 하나 만들어야 됨
  const [user, setUser] = useState(null);
  // 새로고침 시 잠시 나오는 화면에 loading이라 표시하고 싶을 때
  const [loading, setLoading] = useState(true);
  // 에러 시 표현할 문구
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    // useEffect는 async를 사용할 수 없다
    // 내부적으로 cleanup 함수를 반환하는데
    // cleanup 함수에서는 async await를 사용할 수 없으므로 밖에 빼야됨
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
