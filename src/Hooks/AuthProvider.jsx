// AuthProvider.jsx
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isAdmin, setAdmin] = useState(() => {
    return sessionStorage.getItem("isAdmin") === "true";
  });

  const [details, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const authInfo = {
    setAdmin,
    isAdmin,
    details,
    setData,
    searchTerm,
    setSearchTerm,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
