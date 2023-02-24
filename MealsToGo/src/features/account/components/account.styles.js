import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import LottieView from "lottie-react-native";
import { Text } from "../../../components/typography/text.component";
import { colors } from "../../../infrastructure/theme/colors";

const background = require("../../../../assets/account-splash.jpeg");

export const AccountBackground = styled.ImageBackground.attrs({
  source: background,
  resizeMode: "cover",
})`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary}
  justify-content: center;
  align-items: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AnimationContainer = styled.View`
  width: 60%;
  height: 30%;
  position: absolute;
  top: 24px;
  padding: ${(props) => props.theme.space[4]};
`;

export const Animation = styled(LottieView)``;

export const AppTitle = styled(Text).attrs({
  variant: "title",
})`
  flex: 0.2;
  justify-content: center;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.8);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.sizes[0]};
`;

export const LoginContainer = styled(AccountContainer)`
  width: 90%;
`;

export const AuthButton = styled(Button).attrs({
  mode: "contained",
  buttonColor: colors.brand.primary,
  textColor: colors.text.inverse,
})`
  padding: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.sizes[0]};
`;

export const CancelButton = styled(AuthButton).attrs({
  buttonColor: colors.ui.error,
})``;

export const UserInput = styled(TextInput).attrs({
  mode: "outlined",
  activeOutlineColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[0]};
`;

export const PassInput = styled(UserInput).attrs({
  secureTextEntry: true,
  textContentType: "password",
})``;

export const LoginError = styled(Text).attrs({ variant: "error" })`
  text-align: center;
`;
