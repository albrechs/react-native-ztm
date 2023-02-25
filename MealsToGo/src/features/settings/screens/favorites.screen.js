import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { PageContainer } from "../components/settings.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { Text } from "../../../components/typography/text.component";
import { FadeInView } from "../../../components/animation/fade.animation";
import { FavoritesContext } from "../../../services/favorites/favorites.context";

const ErrorContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ErrorMsg = styled(Text).attrs({ variant: "error" })`
  text-size: ${(props) => props.theme.fontSizes.h2};
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <PageContainer>
      {favorites.length ? (
        <FadeInView>
          <RestaurantList
            data={favorites}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: item,
                    })
                  }
                >
                  <RestaurantInfoCard restaurant={item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </FadeInView>
      ) : (
        <ErrorContainer>
          <ErrorMsg>You have no favorites!</ErrorMsg>
        </ErrorContainer>
      )}
    </PageContainer>
  );
};
