import React from "react";

const C = () => {
  console.log("C Rendering");
  return (
    <div>
      <h1>C</h1>
    </div>
  );
};

export default React.memo(C);
