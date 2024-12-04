import React from "react";

export default React.memo(function C() {
  console.log("cRender");
  return <div>c</div>;
});
