import React from "react";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantMenuList } from "../components/restaurant-menu-list.component";

const DetailContainer = styled.View`
  flex: 1;
`;

export const RestaurantDetailScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;
  return (
    <DetailContainer>
      <RestaurantInfoCard restaurant={restaurant} />
      <RestaurantMenuList />
    </DetailContainer>
  );
};
