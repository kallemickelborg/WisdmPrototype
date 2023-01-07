import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
};

export default App;
