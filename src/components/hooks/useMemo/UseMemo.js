import React from "react";
import Child from "./Child";
import { useState, useMemo } from "react";

const UseMemo = () => {
  const [first, setFirst] = useState(0);
  const onClickHandle = () => {
    setFirst(first + 1);
  };
  const memoChild = useMemo(() => {
    return <Child />;
  }, [first]);
  return (
    <div>
      <h3>Use Memo</h3>
      <h2>i:{first}</h2>
      <button onClick={onClickHandle}>Increment i</button>
      <h3>Normal Render</h3>
      <Child />
      <h3>Memo Render</h3>
      {memoChild}
    </div>
  );
};

export default UseMemo;
