import React, { useState } from "react";

export default function Practice2() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount(count - 2);
        }}
      >
        -2
      </button>
    </div>
  );
}
