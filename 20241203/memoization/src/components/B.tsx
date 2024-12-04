import React from "react";
import C from "./C";

export default React.memo(function B({ plus }: { plus: () => void }) {
  console.log("b");

  return (
    <div>
      B
      <C />
    </div>
  );
});
