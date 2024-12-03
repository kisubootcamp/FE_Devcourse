import React from 'react';

export default React.memo(function C() {
  console.log('C Rendering');
  return (
    <>
      <h1>C</h1>
    </>
  );
});
