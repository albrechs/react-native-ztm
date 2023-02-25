import React, { useContext } from "react";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";
import { PageContainer } from "../components/settings.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthContext } from "../../../services/authentication/authentication.context";
import { colors } from "../../../infrastructure/theme/colors";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { user, onLogout } = useContext(AuthContext);
  return (
    <PageContainer>
      <AvatarContainer>
        <Avatar.Icon
          size={60}
          icon="wrench"
          backgroundColor={colors.brand.primary}
        />
        <Spacer size="medium" />
        <Text variant="label">{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          left={(props) => <List.Icon {...props} color="red" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsItem
          title="Log Out"
          left={(props) => <List.Icon {...props} color="black" icon="lock" />}
          onPress={onLogout}
        />
      </List.Section>
    </PageContainer>
  );
};
