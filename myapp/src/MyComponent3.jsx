import Login from "./Login"
import Logout from "./Logout"

export default function MyComponent3({isLoggedin}) {
  
  return (
    <>
      { isLoggedin ? <Logout /> : <Login /> }
    </>
  );
}