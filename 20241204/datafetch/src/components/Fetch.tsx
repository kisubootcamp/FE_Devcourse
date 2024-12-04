//1
// import { useEffect, useState } from "react";

// export default function Fetch() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoding] = useState(true);
//   const [error, setError] = useState(false);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setUser(data);
//         setLoding(false);
//       })
//       .catch(() => {
//         setError(true);
//       });
//   }, []);

//   if (loading) return <div>로딩중...</div>;
//   if (error) return <div>에러가 발생했습니다</div>;
//   return (
//     <>
//       <div>
//         <pre>{JSON.stringify(user, null, 2)}</pre>
//       </div>
//     </>
//   );
// }

//2 이걸 더 많이 사용함
import { useEffect, useState } from "react";

export default function Fetch() {
  const [user, setUser] = useState(null);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUser(data);
      setLoding(false);
    } catch {
      setError(true);
      setLoding(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  return (
    <>
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </>
  );
}
