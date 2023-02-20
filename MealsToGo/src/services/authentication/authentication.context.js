import React, { useState, createContext, useContext, useEffect } from "react";
import Constants from "expo-constants";
import { getApps, initializeApp } from "firebase/app";
import { authRequest } from "./authentication.service";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { apiKey, messagingSenderId, appId } =
    Constants.expoConfig.extra.firebase;
  const firebaseConfig = {
    apiKey,
    authDomain: "mealstogo-5ebc7.firebaseapp.com",
    projectId: "mealstogo-5ebc7",
    storageBucket: "mealstogo-5ebc7.appspot.com",
    messagingSenderId,
    appId,
  };
  let firebaseApp;
  if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
  }

  const onLogin = (email, password) => {
    setIsLoading(true);
    authRequest(firebaseApp, email, password)
      .then((authedUser) => {
        setIsLoading(false);
        console.log(authedUser);
        setIsAuthenticated(true);
        setUser(authedUser);
      })
      .catch((e) => {
        setIsLoading(false);
        console.error(e);
        setError(error);
      });
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, isLoading, error, onLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
