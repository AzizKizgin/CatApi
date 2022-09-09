import React from "react";
import { View, Text } from "react-native";
import Cat from "../components/Cat";

export default function Detail({ route, navigation }) {
  const { name, description, image } = route.params;
  return (
    <View>
      <Cat imageUrl={image} name={name} description={description} />
    </View>
  );
}
