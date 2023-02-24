import React from "react";
import LottieView from "lottie-react-native";
import {
  AccountContainer,
  AccountBackground,
  AccountCover,
  AnimationContainer,
  Animation,
  AuthButton,
  AppTitle,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationContainer>
        <LottieView
          key="animation"
          autoPlay={true}
          loop
          resizeMode="cover"
          source={require("../../../../assets/corgi.json")}
        />
      </AnimationContainer>
      <AppTitle>MealsToGo</AppTitle>
      <AccountContainer>
        <AuthButton
          icon="lock-open-variant"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          icon="account-edit"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
