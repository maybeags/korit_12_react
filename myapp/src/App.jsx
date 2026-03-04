import { useRef } from 'react';
import Counter5 from './Counter5';
import './App.css';

export default function App() {
  const inputRef = useRef(null);

  return(
    <>
      <Counter5 />
      <br /><br />
      <input type="text" ref={inputRef}/>
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </>
  );
}