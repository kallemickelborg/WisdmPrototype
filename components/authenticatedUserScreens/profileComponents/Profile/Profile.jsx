import * as React from "react";
import { View, Text, Button } from "react-native";

import MainContainer from "../../../containers/MainContainer/MainContainer";

export default function Profile({ navigation }) {
  return (
    <MainContainer>
      <Text>This is the Profile Screen.</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </MainContainer>
  );
}