import { useState } from "react";

export default function User() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    alert(`Hello ${username} !`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label><br />
      <input type="text" onChange={event => setUsername(event.target.value)} value={username}/> <br />

      <label>Password</label><br />
      <input type="password" onChange={event => setPassword(event.target.value)} value={password}/> <br />

      <label>E-mail</label><br />
      <input type="email" onChange={event => setEmail(event.target.value)} value={email}/> <br /><br />

      <input type="submit" />
    </form>
  );
}