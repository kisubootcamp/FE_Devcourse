import React from "react";
import C from "./C";

export default React.memo(function B() {
  console.log("A rendering");
  return (
    <>
      <h1>B</h1>
      <C />
    </>
  );
});
