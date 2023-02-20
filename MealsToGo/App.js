import React, { useState, useEffect } from "react";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { ThemeProvider } from "styled-components/native";
import { getApps, initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";

const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.apiKey,
  authDomain: "mealstogo-5ebc7.firebaseapp.com",
  projectId: "mealstogo-5ebc7",
  storageBucket: "mealstogo-5ebc7.appspot.com",
  messagingSenderId: Constants.expoConfig.extra.messagingId,
  appId: Constants.expoConfig.extra.appId,
};
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, "albrechs@mac.com", "password")
      .then((user) => {
        console.log(user);
        setIsAuthenticated(true);
      })
      .catch((e) => console.error(e));
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
