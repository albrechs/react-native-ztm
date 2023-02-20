import React from "react";
import { Platform } from "react-native";
import WebView from "react-native-webview";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";

const CompactContainer = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Name = styled(Text)`
  text-align: center;
`;

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image =
    Platform.OS === "android" && isMap ? CompactWebView : CompactImage;

  return (
    <CompactContainer>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Name variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Name>
    </CompactContainer>
  );
};
