import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

export const RestaurantMenuList = () => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <ScrollView>
      <List.Accordion
        title="Breakfast"
        left={(props) => <List.Icon {...props} icon="egg-fried" />}
        expanded={breakfastExpanded}
        onPress={() => setBreakfastExpanded(!breakfastExpanded)}
      >
        <List.Item title="Pork roll, egg, and cheese" description="$1.00" />
        <List.Item title="Coffee" description="$1.00" />
      </List.Accordion>
      <List.Accordion
        title="Lunch"
        left={(props) => <List.Icon {...props} icon="food-hot-dog" />}
        expanded={lunchExpanded}
        onPress={() => setLunchExpanded(!lunchExpanded)}
      >
        <List.Item title="Hot Dog" description="$1.00" />
        <List.Item title="Chili Dog" description="$1.00" />
        <List.Item title="Fries" description="$1.00" />
      </List.Accordion>
      <List.Accordion
        title="Dinner"
        left={(props) => <List.Icon {...props} icon="food-drumstick" />}
        expanded={dinnerExpanded}
        onPress={() => setDinnerExpanded(!dinnerExpanded)}
      >
        <List.Item title="Turkey Dinner" description="$1.00" />
        <List.Item title="Superbeef" description="$1.00" />
        <List.Item title="Onion Rings" description="$1.00" />
      </List.Accordion>
      <List.Accordion
        title="Drinks"
        left={(props) => <List.Icon {...props} icon="glass-mug-variant" />}
        expanded={drinksExpanded}
        onPress={() => setDrinksExpanded(!drinksExpanded)}
      >
        <List.Item title="Narragansett" description="$1.00" />
        <List.Item title="Whiskey" description="$1.00" />
        <List.Item title="Polar Seltzer" description="$1.00" />
      </List.Accordion>
    </ScrollView>
  );
};
