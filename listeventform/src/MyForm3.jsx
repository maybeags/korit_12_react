import { useState } from "react";

export default function MyForm3() {
  const [ user, setUser ] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleSubmit = event => {
    alert(`Hello ${user.firstName} ${user.lastName} !`);
    event.prevetDefault();
  }

  // 어차피 initialValue가 JS 객체니까 함수를 따로 빼겠습니다.
  const handleChange = event => {
    setUser({ ...user, [event.target.name]:event.target.value});
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>First Name</label><br />
      <input type="text" name="firstName" onChange={handleChange} value={user.firstName}/> <br />
      <label>Last Name</label><br />
      <input type="text" name="lastName" onChange={handleChange} value={user.lastName}/> <br />
      <label>E-mail</label><br />
      <input type="text" name="email" onChange={handleChange} value={user.email}/> <br /><br />
      <input type="submit" />
    </form>
  );
}