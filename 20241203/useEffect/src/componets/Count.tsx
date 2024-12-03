import { useEffect } from "react";

export default function Count() {
  useEffect(() => {
    console.log("컴포넌트가 생성될 때만 실행");

    return () => {
      console.log("컴포넌트가 삭제될 때만 실행");
    };
  }, []);

  return <div>Count</div>;
}
