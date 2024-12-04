import { useEffect } from "react";

export default function Interval() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("rendering~");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("rendering end!");
    };
  }, []);
  return <div>Interval</div>;
}
