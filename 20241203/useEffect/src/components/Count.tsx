import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 컴포넌트가 생서되면 하고 싶은 로직
    // API 호출
    console.log("hi");

    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // 삭제될 때 호출
    return () => {
      console.log("bye");
    };
  }, []);
  return <div>Count: {count}</div>;
}
