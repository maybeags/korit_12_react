import { useState } from "react";

export default function Review() {
  const [ name, setName ] = useState<string|null>('');

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setName(event.target.value);
  }

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Hello ${name} !`);
    setName('');
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={name}
          onChange={handleChange}  
        />
        <input type="submit" value='제출'/>
      </form>
    </>
  );
}