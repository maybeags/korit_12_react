import { useEffect, useState } from "react";

export default function Counter4() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {console.log('첫 번째 렌더링시에만 useEffect의 callback 함수가 호출됩니다. 나머지는 이 내용이 콘솔에 다시 안나옵니다.')}, []);

  return(
    <>
      <p>Count : {count1} | {count2}</p>
      <button onClick={() => setCount1(preValue => preValue + 1)}>count1 증가</button>
      <br />
      <br />
      <button onClick={() => setCount2(PreValue => PreValue + 1)}>count2 증가</button>
    </>
  );
}