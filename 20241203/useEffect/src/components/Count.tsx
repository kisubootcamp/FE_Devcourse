import { useEffect } from "react";

export default function Count() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("인터벌 작동중");
    }, 1000);
    return () => {
      console.log("삭제됨");
      clearInterval(interval);
    };
  }, []);
  return <div>Count</div>;
}
