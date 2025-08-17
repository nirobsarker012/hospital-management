import React, { type ReactNode } from "react";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValue {}
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const authInfo: AuthContextValue = {};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
