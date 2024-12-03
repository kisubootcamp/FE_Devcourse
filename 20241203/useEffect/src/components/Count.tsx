import { useEffect, useState } from "react";

export default function Count() {
  useEffect(() => {
    console.log("Count Created!");

    const interval = setInterval(() => {
      console.log("interval!");
    }, 1000);

    return () => {
      console.log("Count Destroyed");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClock></button>
    </div>
  );
}
