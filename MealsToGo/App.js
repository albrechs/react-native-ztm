import React, { useEffect } from "react";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { getApps, initializeApp } from "firebase/app";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthContextProvider } from "./src/services/authentication/authentication.context";

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

const app = initializeApp(firebaseConfig);

export default function App() {
  useEffect(() => {}, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
