import React, { useState, createContext, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
} from "firebase/auth";
import { authRequest } from "./authentication.service";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = useRef(getAuth()).current;

  auth.onAuthStateChanged((u) => {
    if (u) {
      setUser(u);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setError(null);
      })
      .catch((e) => {
        setError(e);
      });
  };

  const onLogin = (email, password) => {
    setIsLoading(true);

    authRequest(auth, email, password)
      .then((authedUser) => {
        setIsLoading(false);

        setIsAuthenticated(true);
        setUser(authedUser);
      })
      .catch((e) => {
        setIsLoading(false);
        console.error(e);
        /* const errSections = e.toString().split(": ");
        const errMsg = errSections[errSections.length - 1]
          .replace(" ", ": ")
          .replace("(auth/", "")
          .replaceAll("-", " ")
          .replace(").", ""); */
        setError(e.toString());
      });
  };

  const onRegister = (email, password, passwordConf) => {
    if (password !== passwordConf) {
      setError("Error: Passwords do not match");
      return;
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        setIsLoading(false);
        console.error(e);
        const errSections = e.toString().split(": ");
        const errMsg = errSections[errSections.length - 1]
          .replace(" ", ": ")
          .replace("(auth/", "")
          .replaceAll("-", " ")
          .replace(").", "");
        setError(errMsg);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
