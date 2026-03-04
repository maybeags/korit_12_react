import { useState } from "react";

export default function Counter() {
  // 초기값이 0인 count 상태 선언 및 초기화
  const [ count, setCount ] = useState(0);

  return(
    <div>
      <p>Counter =  {count}</p>
      {/* <button onClick={() => setCount(count + 1)}>
        Increment
      </button> */}
      <button onClick={() => setCount(preValue => preValue + 1)}>
        증가
      </button>
    </div>
  );
}