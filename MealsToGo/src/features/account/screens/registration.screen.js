import React from "react";
import { AccountBackground, AccountCover } from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";

export const RegistrationScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <Text variant="error">Please Register</Text>
    </AccountBackground>
  );
};
