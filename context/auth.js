"use client";

import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const data = {
    name: "Million",
    role: "donors_sponsors",
  };
  // const navigate = useNavigate();
  const [user, setUser] = useState(data);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (user) {
      return;
    }
    try {
      const decodedToken = jwtDecode(localStorage.getItem("token"));
      setUser(decodedToken.data);
    } catch (error) {
      // navigate("/");
    }
  }, [token, user]);

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
