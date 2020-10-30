import React from "react";
import { AppLoading } from "expo";
import { StatusBar, View } from "react-native";

import { useFonts } from "@use-expo/font";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";

import Routes from "./src/routes";
// import Home from "./src/pages/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {/* <Home /> */}
      <Routes />
    </>
  );
}
