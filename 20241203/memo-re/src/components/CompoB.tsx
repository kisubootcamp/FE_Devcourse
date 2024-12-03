import React from "react";
import CompoC from "./CompoC";

export default React.memo(function CompoB({increment}:{ increment: () => void; }) {
  console.log("B rendering");
  return (
    <>
      <h1>B</h1>
      <CompoC />
    </>
  );
});
