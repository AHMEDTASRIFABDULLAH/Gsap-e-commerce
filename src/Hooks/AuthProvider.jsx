import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isAdmin, setAdmin] = useState(false);
  const [details, setData] = useState([]);
  const authInfo = {
    setAdmin,
    isAdmin,
    details,
    setData,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
