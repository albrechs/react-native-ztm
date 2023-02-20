import React from "react";
import {
  AccountBackground,
  AuthButton,
  CancelButton,
  UserInput,
  PassInput,
  AccountCover,
  LoginContainer,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const LoginScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <LoginContainer>
        <UserInput label="Email" />
        <Spacer size="large" />
        <PassInput label="Password" />
        <Spacer size="large" />
        <Spacer size="large" />
        <AuthButton
          icon="lock-open-variant"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <CancelButton
          icon="arrow-left"
          onPress={() => navigation.navigate("Main")}
        >
          Cancel
        </CancelButton>
      </LoginContainer>
    </AccountBackground>
  );
};
