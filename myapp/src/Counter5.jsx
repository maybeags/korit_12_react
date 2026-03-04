import { useState } from "react";
import useTitle from "./useTitle";

export default function Counter5() {
  const [count, setCount] = useState(0);
  useTitle(`당신은 ${count} 번 클릭했습니다.`);

  return(
    <>
      <p>Counter : {count}</p>
      <button onClick={() => setCount(preValue => preValue +1)}>Increment</button>
    </>
  );
}