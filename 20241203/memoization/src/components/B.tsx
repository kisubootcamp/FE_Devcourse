import React, { Dispatch, SetStateAction } from "react";
import C from "./C";

export default React.memo(function B({
  setCount2,
}: {
  setCount2: Dispatch<SetStateAction<number>>;
}) {
  console.log("B rendering", setCount2);
  return (
    <>
      <div>B </div>
      <C />
    </>
  );
});
