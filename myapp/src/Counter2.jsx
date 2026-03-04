import { useState } from "react"

export default function Counter2() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const increment = () => {
    setCount1(count1+1);  // 아직 재렌더링이 일어나지 않음
    setCount2(count2+1);
    // 모든 상태가 업데이트되고 나서 컴포넌트 재렌더링됨.
  }
  
  return(
    <>
      <p>Count : {count1} | {count2}</p>
      <button onClick={increment}>증가</button>
    </>
  );
}