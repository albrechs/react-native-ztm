module.exports = {
  name: "MealsToGo",
  slug: "MealsToGo",
  version: "0.0.2",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  extra: {
    firebase: {
      apiKey: process.env.FIREBASE_API_KEY,
      messagingSenderId: process.env.FIREBASE_MESSAGING_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
    eas: { projectId: "cd8a58b9-1240-4e13-b369-b404195202eb" },
  },
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.albrechs.mealstogo",
  },
  android: {
    package: "com.albrechs.mealstogo",
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#FFFFFF",
    },
  },
};
