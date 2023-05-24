import { useContext, useReducer, useState } from "react";
import loginReducer from "./loginReducer";
import AuthContext from "./authContext";
import useAuth from "./useAuth";

const LoginStatus = () => {
  //const [user, setUser] = useState('');
  // const [user, dispatch] = useReducer(loginReducer, "");
  const { user, dispatch } = useAuth();
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({ type: "LOGIN", username: "shuja.shah" })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
