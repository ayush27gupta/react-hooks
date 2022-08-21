import { useEffect } from "react";
import React from "react";
let renderCount = 0;
const Child = (props) => {
  useEffect(() => {
    renderCount++;
  });
  return <div>renderCount is {renderCount}</div>;
};

export default Child;
