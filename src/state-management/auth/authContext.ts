import React from "react";
import { AuthAction } from "./loginReducer";
import { Dispatch } from "react";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
