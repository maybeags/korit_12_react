import { useEffect, useState } from "react";

export default function Counter3() {
  const [ count, setCount ] = useState(0);

  useEffect(() => console.log('Hello from useEffect'), [count])

  return(
    <div>
      <p>Counter =  {count}</p>
      <button onClick={() => setCount(preValue => preValue + 1)}>
        증가
      </button>
    </div>
  );
}