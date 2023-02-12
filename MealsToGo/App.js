/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { SafeArea } from "./src/utils/safe-area.component";
import { Text } from "./src/components/typography/text.component";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen.js";

const MapScreen = () => (
  <SafeArea>
    <Text variant="label">Maps!</Text>
    <Text variant="error">will appear here eventually</Text>
  </SafeArea>
);

const SettingsScreen = () => (
  <SafeArea>
    <Text variant="label">Settings!</Text>
    <Text variant="error">will appear here eventually</Text>
  </SafeArea>
);

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  restaurants: "restaurant",
  map: "md-map",
  settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function App() {
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
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            taskBarOptions={{
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="map" component={MapScreen} />
            <Tab.Screen name="settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
