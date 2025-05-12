import React, { useContext } from "react";
import { AuthContext } from "../Hooks/AuthProvider";
import { useNavigate } from "react-router-dom";

const AdminChecker = ({ children }) => {
  const navigate = useNavigate();
  const { isAdmin } = useContext(AuthContext);
  if (isAdmin) return children;
  // if (isAdmin) {
  //   navigate("/dashboard/orders");
  // }
  return navigate("/");
};

export default AdminChecker;
