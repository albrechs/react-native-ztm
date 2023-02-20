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
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
};
