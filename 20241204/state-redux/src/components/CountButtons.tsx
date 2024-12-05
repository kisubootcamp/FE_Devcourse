import React from "react";

export default React.memo(function CountButtons() {
  console.log("CountButtons rendering");
  return (
    <>
      <button>감소</button>
      <button>리셋</button>
      <button>증가</button>
    </>
  );
});
