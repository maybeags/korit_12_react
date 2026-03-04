import Login from "./Login";
import Logout from "./Logout";

export default function MyComponent2(props) {
  const isLoggedin = props.isLoggedin;

  if(isLoggedin) {
    return (<Login />)
  }

  return (<Logout />)
} 