import React from "react";
import C from "./c";

export default React.memo(function B({
  count2,
  increment,
}: {
  count2: number;
  increment: () => void;
}) {
  console.log("bRender");
  return (
    <div>
      <h1>b {count2}</h1>
      <C />
    </div>
  );
});
