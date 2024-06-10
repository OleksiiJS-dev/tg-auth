import { createContext } from "react";

export const LogContext = createContext();

export const LogContextProvider = ({ children }) => {
  const logIs = true;
  return <LogContext.Provider value={logIs}>{children}</LogContext.Provider>;
};

export default LogContext;
