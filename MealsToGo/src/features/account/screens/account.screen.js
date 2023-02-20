import React from "react";
import {
  AccountContainer,
  AccountBackground,
  AccountCover,
  AuthButton,
  AppTitle,
  Logo,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      {/*<Logo />*/}
      <AccountCover />
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
