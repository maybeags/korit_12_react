import { useContext } from "react";
import AuthContext from "./createContext";

export default function Hello() {
  const username = useContext(AuthContext);

  return (
    <>
      안녕하세요, {username}
    </>
  );
}