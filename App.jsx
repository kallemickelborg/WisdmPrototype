import React from "react";
import { useCallback } from 'react';
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from './components/Navigation/Navigation'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { styles } from './AppStyles'

// SplashScreen.preventAutoHideAsync();

const App = () => {
  //Adds fonts to the app
  const [fontsLoaded] = useFonts({
    'PoppinsBold': require('./assets/fonts/Poppins/PoppinsBold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </View>
  );
};

export default App;
