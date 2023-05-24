import React, { ReactNode, useReducer } from "react";
import loginReducer from "./loginReducer";
import AuthContext from "./authContext";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginReducer, "");
  return <AuthContext.Provider value={{ user, dispatch }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
