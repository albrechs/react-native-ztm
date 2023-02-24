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

export const RegistrationScreen = ({ navigation }) => {
  const { onRegister, isLoading, error } = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConf, setPasswordConf] = useState(null);
  const passInputField = useRef();
  const passConfField = useRef();

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
            passInputField.current.focus();
          }}
        />
        <Spacer size="large" />
        <PassInput
          ref={passInputField}
          label="Password"
          value={password}
          returnKeyType="next"
          onChangeText={(text) => {
            setPassword(text);
          }}
          onSubmitEditing={() => {
            passConfField.current.focus();
          }}
        />
        <Spacer size="large" />
        <PassInput
          ref={passConfField}
          label="Confirm Password"
          value={passwordConf}
          returnKeyType="go"
          onChangeText={(text) => {
            setPasswordConf(text);
          }}
          onSubmitEditing={() => onRegister(email, password, passwordConf)}
        />
        <Spacer size="large" />
        {error && <LoginError>{error}</LoginError>}
        <Spacer size="large" />
        {!isLoading ? (
          <AuthButton
            icon="account-edit"
            onPress={() => onRegister(email, password, passwordConf)}
          >
            Register
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
