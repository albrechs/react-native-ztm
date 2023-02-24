import React, { useContext, useState, useRef } from "react";
import { ActivityIndicator } from "react-native-paper";
import {
  AccountBackground,
  AppTitle,
  AuthButton,
  CancelButton,
  UserInput,
  PassInput,
  AccountCover,
  LoginContainer,
  LoginError,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const { onLogin, isLoading, loginError } = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const passInput = useRef();

  return (
    <AccountBackground>
      <AccountCover />
      <AppTitle>MealsToGo</AppTitle>
      <LoginContainer>
        <UserInput
          label="Email"
          value={email}
          autoFocus={true}
          autoCapitalize={false}
          textInputType="emailAddress"
          keyboardType="email-address"
          returnKeyType="next"
          onChangeText={(text) => {
            setEmail(text);
          }}
          onSubmitEditing={() => {
            passInput.current.focus();
          }}
        />
        <Spacer size="large" />
        <PassInput
          ref={passInput}
          label="Password"
          value={password}
          returnKeyType="go"
          onChangeText={(text) => {
            setPassword(text);
          }}
          onSubmitEditing={() => onLogin(email, password)}
        />
        <Spacer size="large" />
        {loginError && (
          <>
            <LoginError>Authentication Error</LoginError>
            <LoginError>Please check your email & password</LoginError>
          </>
        )}
        <Spacer size="large" />

        {!isLoading ? (
          <AuthButton
            icon="lock-open-variant"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color="#2182BD" />
        )}
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
