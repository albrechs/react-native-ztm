import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";

const FavoritesContainer = styled.View`
  padding: 10px;
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (favorites.length === 0) {
    return (
      <Text variant="error" style={{ textAlign: "center" }}>
        No Favorites Yet
      </Text>
    );
  }
  return (
    <FavoritesContainer>
      <Spacer variant="left.large">
        <Text variant="caption">Favorites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetail", { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavoritesContainer>
  );
};
