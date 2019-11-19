import React, { useState } from 'react';


export default function CounterFunction() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      <button onClick={() => {
        if(count <= 0){
          setCount(count=0)
        } else {setCount(count - 1)}
      }}>
        -
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
 }
